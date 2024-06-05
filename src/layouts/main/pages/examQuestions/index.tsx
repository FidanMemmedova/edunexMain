import Wrapper from "@/shared/components/wrapper/wrapper";
import { Refresh } from "@/shared/icons/Refresh";
import { Remove } from "@/shared/icons/Remove";
import { useContinueExamQuery } from "@/shared/store/api/exam-options";
import { Divider, Flex, Space, Typography } from "antd";
import { Question, SingleSelectQuestion } from "./SingleSelectQuestion";
import React from "react";
const { Title, Text } = Typography;
const questions = [
  {
    id: 1240,
    subject_unit: 1,
    content: "Quae qui expedita ducimus porro consequatur ut consequatur quis.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerntQKw6",
    type: "reading_text",
    size: "small",
    duration: 309,
    children: [
      {
        id: 1241,
        subject_unit: 10,
        content: "Minus ipsa esse ex omnis ducimus dignissimos autem.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerXeDvKy",
        type: "single-select",
        size: "large",
        duration: 760,
        answers: [
          {
            id: 5055,
            text: "Voluptates magnam voluptas et beatae quia quia officiis.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 5056,
            text: "Suscipit sit omnis eius deleniti non.",
            is_correct: false,
            letter: "G",
            is_match: false,
            matching: null,
          },
          {
            id: 5057,
            text: "Rerum eligendi ea molestias possimus voluptas minus.",
            is_correct: true,
            letter: "A",
            is_match: false,
            matching: null,
          },
          {
            id: 5058,
            text: "Et saepe distinctio totam corrupti dolores voluptatem recusandae.",
            is_correct: false,
            letter: "D",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 1242,
        subject_unit: 6,
        content:
          "In dicta quia alias ut molestiae qui rerum quo voluptatem et omnis facere.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakermCdK9d",
        type: "single-select",
        size: "small",
        duration: 910,
        answers: [
          {
            id: 5059,
            text: "Alias hic alias atque tenetur quis.",
            is_correct: false,
            letter: "F",
            is_match: false,
            matching: null,
          },
          {
            id: 5060,
            text: "Eveniet voluptatem corporis libero dolores sunt.",
            is_correct: false,
            letter: "C",
            is_match: false,
            matching: null,
          },
          {
            id: 5061,
            text: "Veniam omnis et nulla esse hic unde sit numquam.",
            is_correct: false,
            letter: "F",
            is_match: false,
            matching: null,
          },
          {
            id: 5062,
            text: "Id qui quis ipsam id recusandae in.",
            is_correct: false,
            letter: "A",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 1243,
        subject_unit: 5,
        content:
          "Rerum quidem possimus temporibus fugiat provident laborum aut ipsa quia ipsa alias facilis consequuntur.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/faker7hDwly",
        type: "single-select",
        size: "small",
        duration: 433,
        answers: [
          {
            id: 5063,
            text: "Omnis in odio quis quis ut.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 5064,
            text: "Quam ut nostrum sunt ipsum.",
            is_correct: false,
            letter: "D",
            is_match: false,
            matching: null,
          },
          {
            id: 5065,
            text: "Omnis quia ab placeat.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 5066,
            text: "Saepe hic ut voluptatum suscipit mollitia accusamus neque ullam.",
            is_correct: false,
            letter: "C",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 1244,
        subject_unit: 2,
        content:
          "Et dignissimos asperiores qui odit ducimus suscipit perferendis nam.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakera2bAYU",
        type: "single-select",
        size: "small",
        duration: 246,
        answers: [
          {
            id: 5067,
            text: "Aut ipsam commodi sunt ipsa velit nesciunt.",
            is_correct: false,
            letter: "F",
            is_match: false,
            matching: null,
          },
          {
            id: 5068,
            text: "Ad harum occaecati quia incidunt.",
            is_correct: false,
            letter: "G",
            is_match: false,
            matching: null,
          },
          {
            id: 5069,
            text: "Et ullam minima tempore pariatur in et est.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 5070,
            text: "Neque voluptatem est earum ut alias velit est.",
            is_correct: false,
            letter: "E",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 1245,
        subject_unit: 7,
        content:
          "Dolorem numquam suscipit hic sit voluptatum aut nemo dolores nulla quia culpa.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/faker6nOMt6",
        type: "single-select",
        size: "medium",
        duration: 35,
        answers: [
          {
            id: 5071,
            text: "Commodi voluptatum quos nulla quisquam voluptas.",
            is_correct: false,
            letter: "F",
            is_match: false,
            matching: null,
          },
          {
            id: 5072,
            text: "Minima molestias aut animi aut illo enim corrupti.",
            is_correct: false,
            letter: "A",
            is_match: false,
            matching: null,
          },
          {
            id: 5073,
            text: "Saepe excepturi aliquid eum cum adipisci.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 5074,
            text: "Enim quia ut in.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
        ],
      },
    ],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 62,
      parent_id: 21,
      name: "Sual əvəzlikləri",
    },
    answers: [],
  },
  {
    id: 2524,
    subject_unit: 1,
    content:
      "Repellat officiis a soluta veniam ut animi quaerat aut delectus distinctio.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerWXiZJ9",
    type: "listening",
    size: "small",
    duration: 370,
    children: [
      {
        id: 2525,
        subject_unit: 9,
        content:
          "Earum explicabo voluptate dolorem repellat eligendi qui aut hic.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/faker4ffE8R",
        type: "single-select",
        size: "small",
        duration: 239,
        answers: [
          {
            id: 9335,
            text: "Consequatur deserunt at voluptas mollitia laborum laborum eum.",
            is_correct: true,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 9336,
            text: "Et sint necessitatibus neque voluptatem dolore.",
            is_correct: false,
            letter: "G",
            is_match: false,
            matching: null,
          },
          {
            id: 9337,
            text: "Consequatur magni earum ut fugiat.",
            is_correct: true,
            letter: "G",
            is_match: false,
            matching: null,
          },
          {
            id: 9338,
            text: "Ut sed est enim totam eos.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 2526,
        subject_unit: 7,
        content:
          "Quasi esse et molestias doloremque adipisci iusto laudantium quod.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerj1yVQT",
        type: "single-select",
        size: "small",
        duration: 446,
        answers: [
          {
            id: 9339,
            text: "A omnis earum voluptates nam aut.",
            is_correct: false,
            letter: "E",
            is_match: false,
            matching: null,
          },
          {
            id: 9340,
            text: "Est sapiente earum accusantium natus dolores magni adipisci.",
            is_correct: false,
            letter: "A",
            is_match: false,
            matching: null,
          },
          {
            id: 9341,
            text: "Accusantium rerum quo aliquam saepe.",
            is_correct: true,
            letter: "G",
            is_match: false,
            matching: null,
          },
          {
            id: 9342,
            text: "Velit quas delectus vel deserunt perferendis est tenetur.",
            is_correct: true,
            letter: "B",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 2527,
        subject_unit: 8,
        content:
          "Accusantium incidunt beatae asperiores inventore ut aspernatur labore eos pariatur consequatur reiciendis error.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/faker2ncJ6v",
        type: "single-select",
        size: "medium",
        duration: 388,
        answers: [
          {
            id: 9343,
            text: "Unde a voluptatibus quaerat quibusdam.",
            is_correct: true,
            letter: "F",
            is_match: false,
            matching: null,
          },
          {
            id: 9344,
            text: "Impedit laudantium quo totam sunt eos et quas.",
            is_correct: false,
            letter: "A",
            is_match: false,
            matching: null,
          },
          {
            id: 9345,
            text: "Quae accusantium numquam ipsa voluptates modi non rerum.",
            is_correct: false,
            letter: "E",
            is_match: false,
            matching: null,
          },
          {
            id: 9346,
            text: "Nulla aliquam aut distinctio delectus fuga quia.",
            is_correct: false,
            letter: "E",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 2528,
        subject_unit: 4,
        content: "Aut cumque architecto iste autem pariatur rem.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakeriqMHRq",
        type: "single-select",
        size: "large",
        duration: 67,
        answers: [
          {
            id: 9347,
            text: "Nam ut qui qui soluta dignissimos cumque rerum.",
            is_correct: false,
            letter: "E",
            is_match: false,
            matching: null,
          },
          {
            id: 9348,
            text: "Magni ipsam est ad quasi modi ut quia et.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 9349,
            text: "Architecto minus est fugiat sapiente.",
            is_correct: false,
            letter: "A",
            is_match: false,
            matching: null,
          },
          {
            id: 9350,
            text: "Occaecati adipisci totam quia ipsa.",
            is_correct: false,
            letter: "D",
            is_match: false,
            matching: null,
          },
        ],
      },
      {
        id: 2529,
        subject_unit: 9,
        content:
          "Ex eveniet recusandae aspernatur inventore quis sapiente aut ea.",
        file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerkl6Uq0",
        type: "single-select",
        size: "medium",
        duration: 143,
        answers: [
          {
            id: 9351,
            text: "Illo error nam voluptatem nulla.",
            is_correct: false,
            letter: "B",
            is_match: false,
            matching: null,
          },
          {
            id: 9352,
            text: "Officiis reprehenderit aut doloremque.",
            is_correct: false,
            letter: "D",
            is_match: false,
            matching: null,
          },
          {
            id: 9353,
            text: "Quia sed sed minus aut odio.",
            is_correct: false,
            letter: "C",
            is_match: false,
            matching: null,
          },
          {
            id: 9354,
            text: "Hic qui sequi hic voluptas.",
            is_correct: true,
            letter: "B",
            is_match: false,
            matching: null,
          },
        ],
      },
    ],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 13,
      parent_id: 2,
      name: "Söz sonunda “q” samitinin yazılışı.",
    },
    answers: [],
  },
  {
    id: 1896,
    subject_unit: 2,
    content:
      "Facilis dolorem voluptatem eum iste placeat repellendus beatae commodi amet.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerfD66iK",
    type: "single-select",
    size: "large",
    duration: 313,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 99,
      parent_id: 1,
      name: "Leksika",
    },
    answers: [
      {
        id: 7239,
        text: "Dolor assumenda ducimus natus consectetur excepturi aperiam.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 7240,
        text: "Enim dicta vero culpa dolorem veritatis illo quia.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 7241,
        text: "Aut eum error odio beatae.",
        is_correct: false,
        letter: "F",
        is_match: false,
        matching: null,
      },
      {
        id: 7242,
        text: "Placeat quo voluptatem qui vel.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 2394,
    subject_unit: 1,
    content:
      "Omnis quaerat sequi exercitationem commodi et id possimus voluptas sapiente et ut cupiditate.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakeroMoK6p",
    type: "single-select",
    size: "medium",
    duration: 868,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 18,
      parent_id: 2,
      name: "Qoşasaitli sözlər",
    },
    answers: [
      {
        id: 8899,
        text: "Et neque sunt in quia porro doloremque.",
        is_correct: false,
        letter: "A",
        is_match: false,
        matching: null,
      },
      {
        id: 8900,
        text: "Omnis debitis sit consectetur vitae animi ratione possimus.",
        is_correct: true,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 8901,
        text: "Iure repellendus saepe eligendi id et velit accusantium.",
        is_correct: false,
        letter: "G",
        is_match: false,
        matching: null,
      },
      {
        id: 8902,
        text: "Quibusdam tempora eveniet consectetur aliquid qui occaecati optio.",
        is_correct: false,
        letter: "F",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 1621,
    subject_unit: 3,
    content: "Ut cum quo sed modi et facere natus laudantium.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerfuZOo4",
    type: "single-select",
    size: "medium",
    duration: 317,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 90,
      parent_id: 87,
      name: "Mürəkkəb cümlədə vergül və bağlayıcılar",
    },
    answers: [
      {
        id: 6323,
        text: "Accusantium aut error hic dolore soluta provident.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 6324,
        text: "Officia dicta delectus voluptatem eius voluptatem.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 6325,
        text: "Id est aut voluptatem ipsam libero repellendus non.",
        is_correct: true,
        letter: "F",
        is_match: false,
        matching: null,
      },
      {
        id: 6326,
        text: "Molestiae optio harum assumenda odit eos qui libero ipsum.",
        is_correct: false,
        letter: "C",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 1448,
    subject_unit: 1,
    content: "Repellendus fuga nisi soluta consectetur error suscipit.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerIPYHlB",
    type: "single-select",
    size: "small",
    duration: 647,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 25,
      parent_id: 21,
      name: "-lı, -li, -lu, -lü hissəciyi",
    },
    answers: [
      {
        id: 5747,
        text: "Porro vero rerum quibusdam praesentium ut dolores aut.",
        is_correct: true,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 5748,
        text: "Pariatur eius culpa eum rem non ea.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 5749,
        text: "Quo voluptate saepe similique nesciunt est.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 5750,
        text: "Consequuntur rerum ipsum non est cum consequatur consequuntur.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 1949,
    subject_unit: 1,
    content:
      "Sit optio sapiente repudiandae neque aut quia ullam repudiandae nemo natus minus ut error.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerdZxtBO",
    type: "single-select",
    size: "medium",
    duration: 42,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 95,
      parent_id: 87,
      name: "Defis və tire işarələri",
    },
    answers: [
      {
        id: 7415,
        text: "Vel dolor ipsam tempora sed consequatur.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 7416,
        text: "Voluptatem omnis quibusdam quo quidem et ab laborum officiis.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 7417,
        text: "Consequatur sit debitis nisi molestiae qui.",
        is_correct: true,
        letter: "F",
        is_match: false,
        matching: null,
      },
      {
        id: 7418,
        text: "Repellat quos sint earum est explicabo quo rerum laboriosam.",
        is_correct: false,
        letter: "B",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 1739,
    subject_unit: 3,
    content: "Et dolores dolor ea ut vel quis hic.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/faker0PDhTf",
    type: "single-select",
    size: "large",
    duration: 10,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 94,
      parent_id: 87,
      name: "Üç nöqtə",
    },
    answers: [
      {
        id: 6715,
        text: "Non dolorem sed delectus laborum consequatur quibusdam.",
        is_correct: false,
        letter: "B",
        is_match: false,
        matching: null,
      },
      {
        id: 6716,
        text: "Consequuntur voluptatum voluptates at dolor error.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 6717,
        text: "Maxime tenetur voluptatum optio et.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
      {
        id: 6718,
        text: "Iste ex qui quo ut molestiae est enim.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 1149,
    subject_unit: 2,
    content: "Rerum et et culpa sint quia iusto quia debitis rerum ea.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerokrjY3",
    type: "single-select",
    size: "large",
    duration: 441,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 34,
      parent_id: 21,
      name: "Əlamət bildirən sözlər",
    },
    answers: [
      {
        id: 4751,
        text: "Ad et eveniet quidem eligendi voluptatem.",
        is_correct: false,
        letter: "F",
        is_match: false,
        matching: null,
      },
      {
        id: 4752,
        text: "Nemo cum libero harum minus reiciendis officiis autem.",
        is_correct: true,
        letter: "C",
        is_match: false,
        matching: null,
      },
      {
        id: 4753,
        text: "Dolor voluptatem sed provident nobis quas omnis rem.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 4754,
        text: "Tempore veritatis magni et qui reiciendis et.",
        is_correct: false,
        letter: "A",
        is_match: false,
        matching: null,
      },
    ],
  },
  {
    id: 856,
    subject_unit: 1,
    content:
      "Ullam voluptates sequi ab laudantium illum eaque iste provident quas.",
    file: "http://edunex.test/storage/private/var/folders/dt/zr2wsnm12ggf02gnb2wfzfj40000gn/T/fakerCoWqP3",
    type: "single-select",
    size: "medium",
    duration: 811,
    children: [],
    grade: {
      id: 5,
      name: 5,
    },
    topic: {
      id: 87,
      parent_id: 1,
      name: "Durğu işarələri",
    },
    answers: [
      {
        id: 3095,
        text: "Hic dolor velit architecto quia ratione.",
        is_correct: false,
        letter: "A",
        is_match: false,
        matching: null,
      },
      {
        id: 3096,
        text: "Reiciendis omnis architecto cupiditate iusto dolorem autem omnis.",
        is_correct: false,
        letter: "D",
        is_match: false,
        matching: null,
      },
      {
        id: 3097,
        text: "Saepe rerum animi odit qui omnis.",
        is_correct: true,
        letter: "C",
        is_match: false,
        matching: null,
      },
      {
        id: 3098,
        text: "Qui distinctio eum fugit possimus nisi velit.",
        is_correct: false,
        letter: "E",
        is_match: false,
        matching: null,
      },
    ],
  },
];
export const ExamQuestionWrapper: React.FC = () => {
  const uuid = localStorage.getItem("uuid");
  // const { data } = useContinueExamQuery(uuid);

  const singleSelects = React.useMemo(() => {
    return questions.filter((item) => item.type === "single-select");
  }, []);

  const multiSelects = React.useMemo(() => {
    return questions.filter((item) => item.type === "reading_text");
  }, []);

  console.log("1", singleSelects);
  console.log("2", multiSelects);

  return (
    <Wrapper fullHeight={"true"} className="bg-gray">
      <Flex style={{ width: "85%", margin: "auto" }} vertical>
        <Flex
          vertical
          gap="10px"
          style={{ margin: "20px 0px", padding: "20px 0px" }}
        >
          <Title level={5}>KSQ 3-cu sinif TV 4</Title>
          <Flex gap="15px">
            <Text>
              Qeyd. Sualları bax və təsdiqlə. Əgər hər hansı bir sualı dəyişmək
              istəyirsinizsə, sualın başlıq hissəsində olan “sualı yenilə”
              düyməsini klikləyin.
            </Text>
            <Refresh />
          </Flex>
          <Flex gap="15px">
            <Text>
              Qeyd. Əgər hər hansı bir sualda xəta gördünüzsə sualın başlıq
              hissəsində olan “sual xətalıdır” düyməsinə klik et.
            </Text>
            <Remove />
          </Flex>
        </Flex>
        <SingleSelectQuestion questions={questions} />
      </Flex>
      {/* <MultSelectQuestion /> */}
    </Wrapper>
  );
};
