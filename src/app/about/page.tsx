import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { About as AboutType, Experience, Certificate, Skill, ImageAsset } from "@/types";

// Type assertion for the about object
const typedAbout = about as unknown as AboutType;

// Helper function to safely access experience properties
const getExperienceData = (experience: Experience) => ({
  company: experience.company || '',
  role: experience.role || '',
  timeframe: experience.timeframe || '',
  achievements: experience.achievements || [],
  images: experience.images || []
});

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  // Define the structure for the table of contents
  const structure = [
    {
      title: typedAbout.intro.title,
      display: typedAbout.intro.display,
      items: [],
    },
    {
      title: typedAbout.work.title,
      display: typedAbout.work.display,
      items: typedAbout.work.experiences?.map((exp: Experience) => exp.company || '') || [],
    },
    {
      title: typedAbout.studies.title,
      display: typedAbout.studies.display,
      items: typedAbout.studies.institutions.map((institution) => institution.name),
    },
    {
      title: typedAbout.certificates.title,
      display: typedAbout.certificates.display,
      items: typedAbout.certificates.items.map((cert) => cert.title),
    },
    {
      title: typedAbout.technical.title,
      display: typedAbout.technical.display,
      items: typedAbout.technical.skills.map((skill) => skill.title),
    },
  ] as const;
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {typedAbout.work.experiences?.map((exp, index) => {
                  const experience = getExperienceData(exp as Experience);
                  return (
                    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                      <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map((achievement: React.ReactNode, idx: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${idx}`}
                          >
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                      {experience.images && experience.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                          {experience.images.map((image: any, imgIdx: number) => (
                            <Flex
                              key={imgIdx}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width?.toString() || '100%'}
                                alt={image.alt || ''}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  );
                })}
              </Column>
            </>
          )}

          {about.certificates.display && (
            <>
              <Heading as="h2" id={about.certificates.title} variant="display-strong-s" marginBottom="m">
                {about.certificates.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.certificates.items.map((cert, index) => (
                  <Column key={`${cert.title}-${index}`} fillWidth gap="4">
                    <Flex fillWidth horizontal="space-between" vertical="end">
                      <Text id={cert.title} variant="heading-strong-l">
                        {cert.title}
                      </Text>
                      {cert.date && (
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {cert.date}
                        </Text>
                      )}
                    </Flex>
                    {cert.issuer && (
                      <Text variant="heading-default-s" onBackground="brand-weak" marginBottom="m">
                        {cert.issuer}
                      </Text>
                    )}
                    <Text variant="body-default-m">
                      {cert.description}
                    </Text>
                    <Flex fillWidth gap="m" direction="column" paddingTop="m">
                      {cert.image && (
                        <Flex 
                          border="neutral-medium" 
                          radius="m" 
                          overflow="hidden"
                          style={{
                            maxWidth: '800px',
                            aspectRatio: '16/9',
                            margin: '0 auto'
                          }}
                        >
                          <img
                            src={cert.image}
                            alt={`${cert.title} Certificate`}
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'contain',
                              display: 'block'
                            }}
                          />
                        </Flex>
                      )}
                      {cert.credentialUrl && cert.credentialUrl !== "#" && (
                        <Button 
                          href={cert.credentialUrl}
                          target="_blank"
                          variant="secondary"
                          label="View Certificate"
                          size="s"
                        />
                      )}
                    </Flex>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => {
                  // Ensure skill.images is properly typed as ImageAsset[]
                  const images = skill.images as ImageAsset[] | undefined;
                  
                  return (
                    <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                      <Text variant="heading-strong-l">{skill.title}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {images && images.length > 0 && (
                        <Flex fillWidth paddingTop="m" gap="12" wrap>
                          {images.map((image, imgIndex) => (
                            <Flex
                              key={imgIndex}
                              border="neutral-medium"
                              radius="m"
                              style={{
                                minWidth: image.width ? `${image.width}px` : 'auto',
                                height: image.height ? `${image.height}px` : 'auto',
                              }}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width ? image.width.toString() : '100%'}
                                alt={image.alt || ''}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  );
                })}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
