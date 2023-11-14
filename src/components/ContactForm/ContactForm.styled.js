import styled from 'styled-components';

export const InputName = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
`;

export const FormInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

export const NeonButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  color: #333;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 0;
  margin: 0 10px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background-color: rgba(51, 51, 51, 0.1);
    transition: all 0.6s ease;
    border-radius: 50%;
    z-index: -1;
    transform: translate(-50%, -50%) scale(0);
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
