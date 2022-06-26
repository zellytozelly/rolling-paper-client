import { MouseEvent, ChangeEvent, useState } from "react";

import styled from "styled-components";

interface Props {
  // setIsModalOpen: (state: boolean) => void;
  handleClickButton: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const Label = styled.label`
  display: inline-block;
  margin: 20px auto auto 7px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #787878;
`;

const InputField = styled.input`
  width: 263px;
  height: 44px;
  padding: 12px 14px;
  margin-top: 16px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 20px;
  border: 1px solid #f05a39;
  font-size: 20px;
  font-weight: 400;

  &:focus {
    outline: 1px solid #f05a39;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(52%) sepia(36%) saturate(7081%) hue-rotate(341deg) brightness(100%) contrast(89%);
  }
`;

const RadioWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  display: inline-block;
  color: #000000;

  & + & {
    padding-left: 35px;
  }
`;

const RadioColor = styled.div`
  width: 100px;
  height: 140px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: ${(props) => props.color};
`;

const RadioInputField = styled.input`
  accent-color: #f05a39;
  margin: 1px 7px 0 0;

  & + label span {
    width: 10px;
    height: 10px;
  }

  &:checked {
    background-color: #f05a39;
  }
`;

const Button = styled.button`
  width: 263px;
  height: 44px;
  margin-top: 28px;
  font-size: 24px;
  line-height: 24px;
  background: #f05a39;
  color: #ffffff;
  border: 1px solid #f05a39;
  border-radius: 20px;
  cursor: pointer;
`;

function MakeRoll({ handleClickButton }: Props) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paperTheme, setPaperTheme] = useState("");
  const [paperUrl, setPaperUrl] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.currentTarget.value);
  };

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaperTheme(e.currentTarget.value);
  };

<<<<<<< HEAD:src/pages/Modal/MakeRoll/index.tsx
  return (
    <Wrapper>
      <Title>롤링페이퍼를 만들어볼까요?</Title>

      <form>
        <Label>롤링페이퍼 이름을 적어주세요</Label>
        <InputField type="text" name="title" onChange={handleTitleChange} />

        <Label>언제 열어보시겠어요?</Label>
        <InputField type="date" name="dueDate" onChange={handleDateChange} />

        <Label>테마를 선택해주세요!</Label>
        <RadioWrapper>
          <RadioLabel htmlFor="light">
            <RadioInputField
              type="radio"
              name="paperTheme"
              id="light"
              value="light"
              onChange={handleThemeChange}
              defaultChecked
            />
            <span>라이트 테마</span>
            <RadioColor color="#FFF8EB" />
          </RadioLabel>

          <RadioLabel htmlFor="dark">
            <RadioInputField type="radio" name="paperTheme" id="dark" value="dark" onChange={handleThemeChange} />
            <span>다크 테마</span>
            <RadioColor color="#736D62" />
          </RadioLabel>
        </RadioWrapper>

        <Button type="button" onClick={handleClickButton}>
          완료
        </Button>
      </form>
    </Wrapper>
=======
  const handleClickButton = () => {
    // fetch("백엔드쪽 서버 url", {
    //   method: "post",
    //   body: JSON.stringify({
    //     title: title,
    //     dueDate: dueDate,
    //     paperTheme: paperTheme,
    //     batch: 1,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.success) {
    //       setPaperUrl(`https://rolling-paper-client-peach.vercel.app/rollingPaper/${res.json()}`);
    //     }
    //   });
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Title>롤링페이퍼를 만들어볼까요?</Title>

        <form>
          <Label>롤링페이퍼 이름을 적어주세요</Label>
          <InputField type="text" name="title" onChange={handleTitleChange} />

          <Label>언제 열어보시겠어요?</Label>
          <InputField type="date" name="dueDate" onChange={handleDateChange} />

          <Label>테마를 선택해주세요!</Label>
          <RadioWrapper>
            <RadioLabel htmlFor="light">
              <RadioInputField
                type="radio"
                name="paperTheme"
                id="light"
                value="light"
                onChange={handleThemeChange}
                defaultChecked
              />
              <span>라이트 테마</span>
              <RadioColor color="#FFF8EB" />
            </RadioLabel>

            <RadioLabel htmlFor="dark">
              <RadioInputField type="radio" name="paperTheme" id="dark" value="dark" onChange={handleThemeChange} />
              <span>다크 테마</span>
              <RadioColor color="#736D62" />
            </RadioLabel>
          </RadioWrapper>

          <Button type="button" onClick={handleClickButton}>
            완료
          </Button>
        </form>
      </Wrapper>
    </Modal>
>>>>>>> 2e34389092e22d4f1c5883be475e31b4c2471559:src/pages/MakeRoll/index.tsx
  );
}

export default MakeRoll;