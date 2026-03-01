import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'my journey',
    subtitle: 'BSCSIT student at Niharika College',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'designing using Figma',
    subtitle: 'UI/UX',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2023',
    title: 'vibe coding',
    subtitle: 'Front-end Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -2, -2),
    year: '2023',
    title: 'Started exploring AI',
    subtitle: 'chatGPT, GEMINI',
    position: 'right',
  },
  {
    point: new THREE.Vector3(1, -2, -5),
    year: '2024',
    title: 'Basics',
    subtitle: 'HTML, CSS, JavaScript',
    position: 'right',
  },
  {
    point: new THREE.Vector3(2, -3, -5),
    year: '2024',
    title: 'into React',
    subtitle: 'Building UIs',
    position: 'right',
  },
  {
    point: new THREE.Vector3(3, -2, -8),
    year: '2024',
    title: 'BACKEND BASICS',
    subtitle: 'MySQL, Node.js',
    position: 'right',
  },
  {
    point: new THREE.Vector3(1, 1, -10),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'what next?',
    subtitle: 'AI, Full-stack development, and more',
    position: 'right',
  },
];