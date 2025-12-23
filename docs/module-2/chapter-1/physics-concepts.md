---
sidebar_position: 2
title: "Physics Concepts in Simulation"
---

# Physics Concepts in Simulation

Understanding the physics concepts that govern robot simulation is crucial for creating realistic and accurate digital twins. This chapter covers the fundamental physics principles implemented in Gazebo.

## Core Physics Concepts

### Newtonian Mechanics

Gazebo implements Newtonian mechanics to simulate the motion of rigid bodies:

- **Newton's First Law**: Objects at rest stay at rest, objects in motion stay in motion unless acted upon by an external force
- **Newton's Second Law**: F = ma (Force equals mass times acceleration)
- **Newton's Third Law**: For every action, there is an equal and opposite reaction

### Forces in Simulation

#### Gravity
- Standard gravitational acceleration: 9.81 m/s²
- Configurable direction and magnitude
- Affects all objects with mass

#### Friction
- Static friction: Prevents objects from starting to move
- Dynamic friction: Opposes motion once objects are moving
- Coefficient of friction varies by material

#### Collision Forces
- Normal forces during contact
- Impulse forces during impact
- Restitution (bounciness) properties

## Mathematical Models

### Rigid Body Dynamics

The motion of each rigid body is governed by:

```
F = ma (translational motion)
τ = Iα (rotational motion)
```

Where:
- F is the net force
- m is the mass
- a is the linear acceleration
- τ is the net torque
- I is the moment of inertia
- α is the angular acceleration

### Integration Methods

Gazebo uses numerical integration to solve the equations of motion:

- **Euler Method**: Simple but less accurate
- **Runge-Kutta**: More accurate but computationally expensive
- **Symplectic Integrators**: Preserve energy properties

## Practical Implementation

### Inertial Properties

For accurate simulation, each link must define its inertial properties:

```xml
<link name="link_name">
  <inertial>
    <mass value="1.0"/>
    <inertia ixx="0.1" ixy="0.0" ixz="0.0"
             iyy="0.1" iyz="0.0" izz="0.1"/>
  </inertial>
</link>
```

The inertia tensor describes how mass is distributed throughout the link.

### Center of Mass

The center of mass affects stability and balance:
- Should be accurately positioned based on actual robot design
- Lower center of mass increases stability
- Critical for humanoid robots to maintain balance

## Physics Engines

Gazebo supports multiple physics engines:

### ODE (Open Dynamics Engine)
- Default engine
- Good balance of accuracy and performance
- Well-tested for robotics applications

### Bullet Physics
- More modern physics engine
- Better handling of complex collisions
- Good for articulated robots

### Simbody
- High-accuracy engine
- Better for complex mechanisms
- More computationally intensive

## Key Considerations

### Time Step
- Smaller time steps increase accuracy but reduce performance
- Typical values: 0.001s to 0.01s
- Must be stable for the physics engine

### Real-time Factor
- Controls simulation speed relative to real time
- `1.0` = real-time, `<1.0` = slower, `>1.0` = faster
- Important for development vs. deployment considerations

Understanding these physics concepts will help you create more accurate and realistic simulations for your digital twins.