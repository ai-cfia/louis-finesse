import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: fixed;
  flex-direction: column;
  height: 100%;
`;

export const LogoContainer = styled.div`
  padding-top: 20vh;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

export const SearchBarContainer = styled.div`
  padding-top: 5vh;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

export const SearchBarSearchContainer = styled.div`
  padding-top: 0;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

export const SloganContainer = styled.div`
  display: flex;
  text-align: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  color: grey;
`;

export const SearchPageHeaderContainer = styled.div`
  display: flex;
  top: 0;
  z-index: 100;
  background-color: white;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px;
  margin-left: 10vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 12px;
  margin-left: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 3rem;
  border: black;
  border-radius: 20px;
  padding: 0 13px;
  box-shadow: 0px 0px 8px #ddd;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const ResultList = styled.div`
  width: 98%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px #ddd;
  border-radius: 10px;
  margin-top: 1rem;
  max-height: auto;
  overflow-y: auto;
  margin-left: 1%;
`;

export const WarningLabel = styled.div`
  background-color: #ffd700;
  color: #ff4500;
  padding: 10px;
`;

export const DebugPanelContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 5px;
  min-width: 250px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0px;
  z-index: 1000;
  white-space: normal;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const RadioLabel = styled.span`
  white-space: nowrap;
  cursor: pointer;
  color: black;
`;

export const SearchButton = styled.button`
  all: unset;
  cursor: pointer;
`;
