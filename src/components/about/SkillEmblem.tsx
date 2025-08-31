"use client";
import React, { useRef, useCallback } from "react";
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const positionTooltip = useCallback(() => {
    if (!containerRef.current || !tooltipRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const overlayHeight = tooltipRef.current.offsetHeight || 220;
    const headerOffset = 88; // header + spacing
    const viewportHeight = window.innerHeight;
    const desiredTop = containerRect.top - overlayHeight - 12; // place above skill
    const clampedTop = Math.max(
      headerOffset,
      Math.min(desiredTop, viewportHeight - overlayHeight - 12)
    );
    tooltipRef.current.style.setProperty("--skill-tooltip-top", `${clampedTop}px`);
  }, []);

  const handleMouseEnter = () => positionTooltip();
  const handleFocus = () => positionTooltip();

  return (
    <div className={styles.skillEmblem} ref={containerRef}>
      <button
        className={styles.emblemButton}
        aria-haspopup="dialog"
        aria-describedby={`skill-desc-${skill.title}`}
        title={`Mehr zu ${skill.title}`}
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        onTouchStart={handleMouseEnter}
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
        ref={tooltipRef}
      >
        <Text variant="body-default-m" onBackground="neutral-weak">
          {skill.description}
        </Text>
      </div>
    </div>
  );
} 