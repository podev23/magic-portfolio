"use client";

import React from "react";
import { SkillEmblem } from "./SkillEmblem";
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

interface SkillsAccordionProps {
  skills: Skill[];
}

export function SkillsAccordion({ skills }: SkillsAccordionProps) {
  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <SkillEmblem
          key={`skill-${skill.title}-${index}`}
          skill={skill}
        />
      ))}
    </div>
  );
} 