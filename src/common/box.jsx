import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  color: $secondary-text-color;
  border-radius: 0 0 0.25rem 3rem;
  margin-bottom: 15px;
`;

const Title = styled.div`
  background-color: $secondary-light;
  color: $primary-text-color;
  border-radius: inherit;
`;
// .Title {
//
//     .Background2 {
//       background-color: $gray;
//       border-radius: 0 0 0 2rem;
//       height: 50px;
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       h4 {
//         margin: 0;
//         padding: 0;
//         font-size: 1rem;
//       }
//     }
//   }

const Box = props => {
  const { label, children, backgroundColor, padding } = props;
  return (
    <BoxContainer>
      <Title style={{ backgroundColor }}>
        <div className="classes.Background2">
          <h4>{label}</h4>
        </div>
        <div className="classes.Body" style={{ padding }}>
          {children}
        </div>
      </Title>
    </BoxContainer>
  );
};

Box.defaultProps = {
  backgroundColor: "#fff"
};

export default Box;

// @import "../../../custom";
// .Box {

//

//   .Body {
//     padding: 10px;
//     .col {
//       padding-top: 15px;
//       padding-bottom: 15px;
//     }
//   }

//   h4 {
//     padding: 1rem 0;
//   }
// }
