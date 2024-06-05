import { IconCursor } from "@/shared/components/cursor";
import { Refresh } from "@/shared/icons/Refresh";
import { Remove } from "@/shared/icons/Remove";
import { ISingleSelect } from "@/shared/types";
import { Flex, List, Typography } from "antd";
import React, { memo } from "react";

const { Title, Text } = Typography;

interface IProps {
  questions: Array<ISingleSelect>;
}

const answerLabels = ["A", "B", "C", "D", "E"];

export const SingleSelectQuestion: React.FC<IProps> = memo(({ questions }) => {
  return (
    <Flex style={{ width: "100%" }} vertical>
      <Flex gap="10px">
        <Title level={5}>
          Mətndə fərqləndirilmiş “işıqlandırmaq” feilinin kontekstə uyğun
          izahını seç
        </Title>
        <Flex>
          <Refresh />
          <Remove />
        </Flex>
      </Flex>

      {questions.map((question, qIndex) => (
        <Flex
          key={qIndex}
          vertical
          style={{
            marginBottom: "16px",
            gap: "10px",
            backgroundColor: "white",
            padding: " 30px",
            borderRadius: "6px",
            border: "1px solid #E0E0E0",
          }}
        >
          <Flex gap="30px" align="center">
            <Text strong>{question.content}</Text>
            <Flex gap="12px">
              <IconCursor>
                <Refresh />
              </IconCursor>
              <IconCursor>
                <Remove />
              </IconCursor>
            </Flex>
          </Flex>
          <List
            dataSource={question.answers}
            renderItem={(answer) => (
              <List.Item style={{ padding: "4px 0px" }}>
                <Flex align="center">
                  <Flex
                    align="center"
                    justify="center"
                    color="black"
                    style={{
                      marginRight: "8px",
                      width: "24px",
                      height: "24px",
                      border: "1px dashed #d9d9d9",
                      borderRadius: "50%",
                      fontSize: "10px",
                      cursor:"pointer",
                      background: answer.is_correct ? "green" : "white",
                    }}
                  >
                    {answer.letter}
                  </Flex>
                  <Text>{answer.text}</Text>
                </Flex>
              </List.Item>
            )}
          />
        </Flex>
      ))}
    </Flex>
  );
});
