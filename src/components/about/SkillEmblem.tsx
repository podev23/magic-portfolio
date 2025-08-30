import React from "react";
import { Icon, Media, Text } from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icons";
import styles from "./about.module.scss";

interface SkillImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isIcon?: boolean;
}

interface Skill {
  title: string;
  description: React.ReactNode;
  images?: SkillImage[];
}

interface SkillEmblemProps {
  skill: Skill;
}

export function SkillEmblem({ skill }: SkillEmblemProps) {
  return (
    <div className={styles.skillEmblem}>
      <button
        className={styles.emblemButton}
        aria-haspopup="dialog"
        aria-describedby={`skill-desc-${skill.title}`}
        title={`Mehr zu ${skill.title}`}
        tabIndex={0}
      >
        {skill.images?.[0]?.isIcon ? (
          <Icon
            name={skill.images[0].src as keyof typeof iconLibrary}
            size="m"
            onBackground="brand-weak"
          />
        ) : skill.images?.[0] ? (
          <Media
            src={skill.images[0].src}
            alt={skill.images[0].alt}
            width={32}
            height={32}
            radius="m"
          />
        ) : (
          <div className={styles.placeholderIcon}>
            {skill.title.charAt(0).toUpperCase()}
          </div>
        )}
        <span className={styles.skillLabel}>{skill.title}</span>
      </button>
      <div
        id={`skill-desc-${skill.title}`}
        className={styles.skillDesc}
        role="tooltip"
      >
        <Text variant="body-default-m" onBackground="neutral-weak">
          {skill.description}
        </Text>
      </div>
    </div>
  );
} 