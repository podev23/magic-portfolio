import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads } from "react-icons/fa6";

// Technologie-spezifische Icons
import { SiNextdotjs, SiNestjs, SiPlotly, SiDocker, SiKubernetes, SiGrafana, SiPrometheus, SiGithub, SiGitlab } from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  award: HiOutlineAcademicCap,
  // Technologie-Logos
  nextjs: SiNextdotjs,
  nestjs: SiNestjs,
  plotly: SiPlotly,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  gitlab: SiGitlab
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;