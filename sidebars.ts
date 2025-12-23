import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar structure for the AI-Native Book on Physical AI & Humanoid Robotics
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: ROS 2 Architecture Understanding',
          items: [
            'module-1/chapter-1/intro',
            'module-1/chapter-1/middleware',
            'module-1/chapter-1/nodes',
            'module-1/chapter-1/topics',
            'module-1/chapter-1/services',
            'module-1/chapter-1/diagrams',
            'module-1/chapter-1/integration-example',
            'module-1/chapter-1/exercises',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Creating Simple Python ROS 2 Node',
          items: [
            'module-1/chapter-2/intro',
            'module-1/chapter-2/publisher-node',
            'module-1/chapter-2/subscriber-node',
            'module-1/chapter-2/service-server',
            'module-1/chapter-2/service-client',
            'module-1/chapter-2/examples',
            'module-1/chapter-2/simulation',
            'module-1/chapter-2/troubleshooting',
            'module-1/chapter-2/exercises',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Python Agent to ROS 2 Controller Bridge',
          items: [
            'module-1/chapter-3/intro',
            'module-1/chapter-3/ai-ros-integration',
            'module-1/chapter-3/message-passing',
            'module-1/chapter-3/data-flow-diagrams',
            'module-1/chapter-3/practical-examples',
            'module-1/chapter-3/message-passing-examples',
            'module-1/chapter-3/conceptual-exercises',
            'module-1/chapter-3/validation-exercises',
            'module-1/chapter-3/best-practices',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 4: Understanding and Modifying URDF',
          items: [
            'module-1/chapter-4/intro',
            'module-1/chapter-4/urdf-structure',
            'module-1/chapter-4/urdf-examples',
            'module-1/chapter-4/reading-urdf',
            'module-1/chapter-4/modifying-urdf',
            'module-1/chapter-4/urdf-diagrams',
            'module-1/chapter-4/urdf-exercises',
            'module-1/chapter-4/urdf-validation',
            'module-1/chapter-4/learning-objectives',
            'module-1/chapter-4/validation-exercises',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Gazebo Physics Simulation',
          items: [
            'module-2/chapter-1/intro',
            'module-2/chapter-1/physics-concepts',
            'module-2/chapter-1/gravity-collisions',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Unity Visualization and HRI',
          items: [
            'module-2/chapter-2/intro',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Sensor Simulation',
          items: [
            'module-2/chapter-3/intro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Isaac Sim - Simulation and Synthetic Data',
          items: [
            'module-3/chapter-1/intro',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Isaac ROS - Hardware-Accelerated Perception',
          items: [
            'module-3/chapter-2/intro',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Nav2 - Path Planning for Humanoid Movement',
          items: [
            'module-3/chapter-3/intro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: VLA Fundamentals',
          items: [
            'vla/index',
            'vla/fundamentals',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Voice-to-Action Pipeline',
          items: [
            'vla/voice-to-action',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Language-to-Actions',
          items: [
            'vla/language-to-actions',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 4: End-to-End Autonomous Behavior',
          items: [
            'vla/end-to-end',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
