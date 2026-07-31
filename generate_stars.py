import random

def generate_shadows(num, max_y=2000, max_x=2000):
    shadows = []
    for _ in range(num):
        x = random.randint(0, max_x)
        y = random.randint(0, max_y)
        shadows.append(f"{x}px {y}px #fff")
    return ",\n      ".join(shadows)

stars1 = generate_shadows(350) # Small stars
stars2 = generate_shadows(150) # Medium stars
stars3 = generate_shadows(50)  # Large stars

js_code = f"""import React from 'react';
import styled from 'styled-components';

export default function AnimatedStars() {{
  return (
    <StyledWrapper>
      <div className="container">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    </StyledWrapper>
  );
}}

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  .container {{
    height: 100%;
    width: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #050508 100%);
    overflow: hidden;
  }}

  @keyframes animStar {{
    from {{
      transform: translateY(0px);
    }}
    to {{
      transform: translateY(-2000px);
    }}
  }}

  #stars {{
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow:
      {stars1};
    animation: animStar 50s linear infinite;
  }}
  #stars:after {{
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow:
      {stars1};
  }}

  #stars2 {{
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      {stars2};
    animation: animStar 100s linear infinite;
  }}
  #stars2:after {{
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      {stars2};
  }}

  #stars3 {{
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow:
      {stars3};
    animation: animStar 150s linear infinite;
  }}
  #stars3:after {{
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow:
      {stars3};
  }}
`;
"""

with open("src/components/AnimatedStars.jsx", "w") as f:
    f.write(js_code)

print("Generated src/components/AnimatedStars.jsx")
