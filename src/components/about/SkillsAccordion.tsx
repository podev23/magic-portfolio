"use client";

import React, { useState } from "react";
import { Text } from "@once-ui-system/core";
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
  const [openSkillIndex, setOpenSkillIndex] = useState<number | null>(null);

  const handleSkillToggle = (index: number) => {
    setOpenSkillIndex(openSkillIndex === index ? null : index);
  };

  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <SkillEmblem
          key={`skill-${skill.title}-${index}`}
          skill={skill}
          isOpen={openSkillIndex === index}
          onToggle={() => handleSkillToggle(index)}
        />
      ))}
    </div>
  );
} 