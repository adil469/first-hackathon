---
sidebar_position: 3
title: "Gravity and Collision Simulation"
---

# Gravity and Collision Simulation

This section covers the implementation of gravity and collision detection in Gazebo, which are fundamental to creating realistic physics simulations.

## Gravity Simulation

### Setting Gravity Parameters

In Gazebo, gravity is defined globally in the world file:

```xml
<world name="my_world">
  <physics name="1ms" type="ode">
    <max_step_size>0.001</max_step_size>
    <real_time_factor>1.0</real_time_factor>
    <real_time_update_rate>1000.0</real_time_update_rate>
    <gravity>0 0 -9.8</gravity>
  </physics>
</world>
```

### Custom Gravity Environments

You can modify gravity for different scenarios:

- **Moon gravity**: `<gravity>0 0 -1.62</gravity>` (1/6 of Earth's gravity)
- **Mars gravity**: `<gravity>0 0 -3.71</gravity>` (about 1/3 of Earth's gravity)
- **Zero gravity**: `<gravity>0 0 0</gravity>` (for space robotics simulation)

## Collision Detection

### Collision Properties

Each link in your robot model needs collision properties:

```xml
<link name="collision_link">
  <collision>
    <geometry>
      <box size="0.1 0.1 0.1"/>
    </geometry>
    <surface>
      <friction>
        <ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode>
      </friction>
      <bounce>
        <restitution_coefficient>0.1</restitution_coefficient>
        <threshold>100000</threshold>
      </bounce>
      <contact>
        <ode>
          <soft_cfm>0</soft_cfm>
          <soft_erp>0.2</soft_erp>
          <kp>1000000000000</kp>
          <kd>1</kd>
          <max_vel>100.0</max_vel>
          <min_depth>0.001</min_depth>
        </ode>
      </contact>
    </surface>
  </collision>
</link>
```

### Collision Shapes

Gazebo supports various collision shapes:

- **Box**: `<box size="x y z"/>`
- **Sphere**: `<sphere radius="r"/>`
- **Cylinder**: `<cylinder radius="r" length="l"/>`
- **Capsule**: For rounded shapes (not directly supported, approximated with cylinders and spheres)
- **Mesh**: Complex shapes using STL/OBJ files

## Collision Detection Algorithms

### Contact Detection

Gazebo uses multiple algorithms for collision detection:

1. **Broad Phase**: Quick elimination of non-colliding pairs
2. **Narrow Phase**: Precise contact point calculation
3. **Contact Resolution**: Force application for collision response

### Performance Considerations

- Use simpler collision geometries when possible
- Limit the number of contact points
- Adjust surface parameters for performance vs. accuracy

## Practical Examples

### Collision Between Robot and Environment

When a robot interacts with the environment:

1. Gazebo detects when collision geometries overlap
2. Contact forces are calculated based on material properties
3. The robot's motion is adjusted according to physics laws
4. Joint constraints are enforced during contact

### Multi-body Collisions

For robots with multiple links:

- Self-collision detection prevents links from penetrating each other
- Joint limits and constraints affect collision behavior
- Contact information is available through ROS topics

## Troubleshooting Common Issues

### Robot Falling Through Ground
- Check collision geometry in your model
- Verify surface parameters are set correctly
- Ensure physics engine is properly configured

### Unstable Collisions
- Increase constraint force mixing (CFM) values
- Adjust error reduction parameter (ERP)
- Reduce time step if possible

### Performance Issues
- Simplify collision geometries
- Reduce contact surface complexity
- Adjust physics engine parameters

Understanding gravity and collision simulation is essential for creating stable and realistic robot simulations in your digital twin environment.