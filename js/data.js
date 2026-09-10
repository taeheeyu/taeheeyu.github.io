/**
 * 금천고 학급 소개 웹사이트 데이터 (CLASS_DATA)
 */

const CLASS_DATA = {
  classInfo: {
    schoolName: "금천고등학교",
    gradeClass: "2학년 특수학급",
    title: "우리 반을 소개합니다",
    subtitle: "꿈을 키우고 서로의 개성을 함께 나누는 따뜻한 교실",
    heroBadge: "2026학년도 금천고"
  },

  // 랜딩 페이지의 단체 그림과 마우스 오버 영역입니다.
  // tooltip 값을 수정하면 각 영역에 표시되는 문구를 바꿀 수 있습니다.
  landingPage: {
    imageUrl: "./images/main group image.png",
    imageAlt: "벚꽃 아래 함께 있는 금천고등학교 학생들",
    hotspots: [
      { id: "sihoon", tooltip: "김시훈", x: 8.43, y: 42.40, width: 12.80, height: 35.92 },
      { id: "jeongrim-hana", tooltip: "김정림과 임하나", x: 34.75, y: 67.48, width: 16.39, height: 30.29 },
      { id: "haeum-seongho", tooltip: "김하음과 이성호", x: 53.23, y: 49.20, width: 19.98, height: 22.10 },
      { id: "seongyun", tooltip: "김성윤", x: 54.01, y: 71.63, width: 9.21, height: 25.19 },
      { id: "seheon", tooltip: "정세헌", x: 64.77, y: 72.26, width: 7.72, height: 23.80 },
      { id: "yehwan-byeongwoo", tooltip: "최예환과 박병우", x: 74.04, y: 56.64, width: 13.28, height: 24.00 },
      { id: "jihwan", tooltip: "홍지환", x: 80.00, y: 76.00, width: 6.50, height: 21.50 }
    ]
  },

  groupImages: [
    {
      id: 1,
      title: "함께해서 더 즐거운 우리 반",
      url: "./images/cute version/group image 1.png",
      description: "6월 4일 신나는 댄스 공연 관람 후에"
    },
    {
      id: 2,
      title: "몸과 마음을 가꾸는 학급",
      url: "./images/cute version/group image 2.png",
      description: "3월 24일 학교 뒷산에 올라 이른 봄을 맞이하며"
    },
    {
      id: 3,
      title: "새로운 경험과 일상의 조화",
      url: "./images/cute version/group image 3.png",
      description: "4월 21일 청계천을 산책하며"
    },
    {
      id: 4,
      title: "소중한 추억을 나누는 시간",
      url: "./images/cute version/group image 4.png",
      description: "5월 15일 서울랜드에서 한 컷!"
    },
    {
      id: 5,
      title: "서로 도우며 성장하는 행복한 교실",
      url: "./images/cute version/group image 5.png",
      description: "4월~7월 3개월간 컴퓨터실에서 다양한 기능을 익혔어요"
    },
    {
      id: 6,
      title: "웃음꽃 피어나는 따뜻한 기억",
      url: "./images/cute version/group image 6.png",
      description: "3월~6월 상암고에서 제과제빵 수업을 들었어요"
    }
  ],

  // 3. 지적장애 학생도 한눈에 이해할 수 있도록 텍스트를 대폭 줄이고 직관적으로 단순화
  education: [
    {
      id: "baking",
      title: "제과제빵",
      icon: "🍞",
      badge: "실습",
      location: "상암고",
      schedule: "1학기 매주 화요일",
      activity: "🧁 맛있는 빵과 쿠키 만들기",
      images: []
    },
    {
      id: "itq",
      title: "컴퓨터 교실",
      icon: "💻",
      badge: "ITQ",
      location: "컴퓨터실",
      schedule: "1학기 매주 금요일",
      activity: "⌨️ 파워포인트 기능 익히기 & 자격증 시험 준비하기",
      images: []
    },
    {
      id: "imagemaking",
      title: "이미지 메이킹",
      icon: "✨",
      badge: "자기계발",
      location: "관악고",
      schedule: "2학기 매주 금요일",
      activity: "🪞 예쁜 미소와 자신감 가꾸기",
      images: []
    },
    {
      id: "handbell",
      title: "핸드벨 음악",
      icon: "🔔",
      badge: "음악",
      location: "청소년센터",
      schedule: "1,2학기 매주 화요일",
      activity: "🎵 맑은 종소리 멜로디 연주",
      images: []
    }
  ],

  issues: [
    {
      id: "issue-1",
      title: "2026학년도 우리 반 출발 🌸",
      date: "2026-03-10",
      tag: "소식",
      summary: "우리 반 7명 친구들과 함께 즐거운 학교 생활을 시작해요!"
    },
    {
      id: "issue-2",
      title: "맛있는 수제 쿠키 완성 🍪",
      date: "2026-03-24",
      tag: "실습",
      summary: "직접 반죽하고 오븐에서 구워낸 수제 쿠키를 나눠 먹었어요."
    },
    {
      id: "issue-3",
      title: "핸드벨 수업 시작 🔔",
      date: "2026-03-24",
      tag: "소식",
      summary: "서로 다른 음이 조화롭게 어우러져요. 발표회를 향해 으쌰으쌰."
    },
    {
      id: "issue-4",
      title: "컴퓨터 자격증(ITQ) 시험 🔔",
      date: "2026-07-11",
      tag: "소식",
      summary: "3개월간 열심히 ITQ 시험 훈련한 결과 1명의 학생이 자격증을 취득했습니다. 축하해요!"
    }
  ],

  students: {
    "20104": {
      id: "20104",
      number: "20104",
      name: "김정림",
      introKeyword: "따뜻한 미소와 다정한 마음",
      centerStudentImg: "./images/cute version/20104_center student cute.png",
      centerNameImg: "./images/20104/20104_center name_nobg.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          title: "좋아하는 친구",
          imgUrl: "./images/20104/20104_drawing 1.png",
          motivation: "김정림촤연헤",
          story: "정림이가 가장 좋아하는 친구입니다. 이름은 쉿! 비밀이에요."
        },
        {
          id: 2,
          title: "좋아하는 선생님",
          imgUrl: "./images/20104/20104_drawing 2.png",
          motivation: "♥",
          story: "좋아하는 선생님이래요. 여기저기 하트가 뿅뿅!!."
        },
        {
          id: 3,
          title: "소중한 사람",
          imgUrl: "./images/20104/20104_drawing 3.png",
          motivation: "ㅑ호갸ㅔㅕ",
          story: "또 좋아하는 선생님이에요"
        },
        {
          id: 4,
          title: "파마머리 친구",
          imgUrl: "./images/20104/20104_drawing 4.png",
          motivation: "★",
          story: "파마머리를 한 친구입니다"
        },
        {
          id: 5,
          title: "다이소와 가족",
          imgUrl: "./images/20104/20104_drawing 5.png",
          motivation: "엄마 아빠",
          story: "정림이가 '다이소'를 자주 말해요. 가족들과 다이소에서 쇼핑을 하나봐요."
        }
      ]
    },

    "20105": {
      id: "20105",
      number: "20105",
      name: "김하음",
      introKeyword: "맑고 맑은 긍정 에너자이저",
      centerStudentImg: "./images/cute version/20105_center student cute.png",
      centerNameImg: "./images/20105/20105_center name_nobg.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          title: "귀여운 난타",
          imgUrl: "./images/20105/20105_drawing 1.png",
          motivation: "귀여운 난타. 스트레스가 쌓일 때 풀리는 악기",
          story: "오랫동안 복지관에서 난타를 쳐서 실력이 베테랑입니다."
        },
        {
          id: 2,
          title: "귀여운 악마",
          imgUrl: "./images/20105/20105_drawing 2.png",
          motivation: "무심무심한 악마다. 리듬게임으로 랩배틀로 승부를 냇다",
          story: "\"무시무시한 악마\"라고 합니다. 하지만 너무 귀여운 캐릭터지요?"
        },
        {
          id: 3,
          title: "말차 고양이",
          imgUrl: "./images/20105/20105_drawing 3.png",
          motivation: "말차는 제일 좋아합니다 귀여온 고양이로 그려지다",
          story: "하음이는 말차 초콜릿, 말차 빵 등등 말차 들어간 모든 것을 다 좋아해요."
        },
        {
          id: 4,
          title: "리코짱(리코더)",
          imgUrl: "./images/20105/20105_drawing 4.png",
          motivation: "리코더는 제일 좋아합니다 이를 리코짱! 뀨하",
          story: "하음이는 좋아하는 물건에 항상 별명을 지어줍니다. \"내 리코짱 어디있지?\" 찾아헤매요. \"뀨하\"는 하음이의 부캐가 내는 귀여운 소리입니다."
        },
        {
          id: 5,
          title: "렐라짱",
          imgUrl: "./images/20105/20105_drawing 5.png",
          motivation: "좋아하는 악기에요. 별명은 렐라짱!",
          story: "점심시간, 쉬는시간 틈틈이 연습하기 바빠요. 연주할 수 있는 곡이 계속 늘어나요. (아기상어, 작은별, 곰세마리..)"
        },
        {
          id: 6,
          title: "음악과 리듬게임",
          imgUrl: "./images/20105/20105_drawing 6.png",
          motivation: "가끔씩 스트레스가 생기면 유트부로 노래를 듣고 풀리다",
          story: "음악에 맞춰서 큰북을 두드리는 리듬게임이라고 합니다."
        }
      ]
    },

    "20223": {
      id: "20223",
      number: "20223",
      name: "정세헌",
      introKeyword: "진중하고 창의적인 아티스트",
      centerStudentImg: "./images/cute version/20223_center student cut.png",
      centerNameImg: "./images/20223/20223_center image_nobg.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          title: "만년필",
          imgUrl: "./images/20223/20223_drawing 1.png",
          motivation: "만화를 그릴 때 필요해요.",
          story: "만년필을 사용하는 만화감독을 떠올렸대요."
        },
        {
          id: 2,
          title: "JSP 코믹스 히어로",
          imgUrl: "./images/20223/20223_drawing 2.png",
          motivation: "일본 최초의 여성 히어로이자 j.s.p 코믹스의 주인공입니다.",
          story: "세헌이의 멋진 상상 속 슈퍼히어로 캐릭터입니다. j.s.p 코믹스라니...엄청난 세계관이 느껴지네요."
        },
        {
          id: 3,
          title: "좋아하는 음식",
          imgUrl: "./images/20223/20223_drawing 3.png",
          motivation: "제가 좋아하는 음식입니다.",
          story: "치킨과 더불어 세헌이의 최애 메뉴에요. 세헌이는 음식의 유래, 역사에 대해서도 아주 잘 알고 있답니다."
        },
        {
          id: 4,
          title: "울트라 우먼",
          imgUrl: "./images/20223/20223_drawing 4.png",
          motivation: "일본 특촬물로 울트라 시리즈의 스핀오프 시리즈 입니다. 울트라맨에 등장한 울트라 우먼을 중심으로 이끌고 있습니다.",
          story: "화려한 의상을 입고 정의를 위해 싸우는 캐릭터를 좋아하나봐요."
        },
        {
          id: 5,
          title: "프리큐어 주인공",
          imgUrl: "./images/20223/20223_drawing 5.png",
          motivation: "일본 만화 및 장편 티비 애니메이션 시리즈(프리큐어 올스타즈)에 주인공입니다.",
          story: "얼굴과 상의부분에 많은 디테일이 들어가고 당당한 발걸음이 느껴지는 그림입니다."
        },
        {
          id: 6,
          title: "니코와 친구들",
          imgUrl: "./images/20223/20223_drawing 6.png",
          motivation: "프리큐어와 함께 비너스의 대표하는 캐릭터이자 티비 애니메이션 시리즈(니코와 친구들)의 주인공이자 비너스의 최초 첫 캐릭터입니다. 상상한 캐릭터에요.",
          story: "화려한 전사 캐릭터가 아닌 귀여운 동물 캐릭터도 좋아한답니다~"
        }
      ]
    },

    "20413": {
      id: "20413",
      number: "20413",
      name: "임하나",
      introKeyword: "상냥하고 솔직한 분위기 메이커",
      centerStudentImg: "./images/cute version/20413_center student cute.png",
      centerNameImg: "./images/20413/20413_center name_nobg.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          title: "로미(티니핑)",
          imgUrl: "./images/20413/20413_drawing 1.PNG",
          motivation: "로미가 좋아서",
          story: "티니핑을 좋아해요. 부끄럼도 많고 장난기도 많은 하나의 성격이 드러납니다"
        },
        {
          id: 2,
          title: "빨간 티니핑",
          imgUrl: "./images/20413/20413_drawing 2.png",
          motivation: "티니핑이 좋아",
          story: "이번엔 빨간 색으로 그려봤어요. 그림을 그릴수록 보고 그리는 실력이 늘어나요."
        },
        {
          id: 3,
          title: "피카츄",
          imgUrl: "./images/20413/20413_drawing 3.png",
          motivation: "피카츄 그려다",
          story: "귀여운 캐릭터를 좋아해요. 스티커, 비즈팔찌, 키링, 오리기 등 캐릭터가 들어간 다양한 작업을 취미로 합니다."
        }
      ]
    },

    "20616": {
      id: "20616",
      number: "20616",
      name: "김성윤",
      introKeyword: "끈기 있고 정직한 노력파",
      centerStudentImg: "./images/cute version/20616_center student cute.png",
      centerNameImg: "./images/20616/20616_center name_nobg.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          title: "좋아하는 노래",
          imgUrl: "./images/20616/20616_drawing 1.png",
          motivation: "여름 안에서 듀스 스탠딩에그 오래된 노래 너에게난 나에게 넌 자전거 탄 풍경 경서 나의 X에게 밤하늘의 별을 핸드폰 듣는게 좋아요 ",
          story: "쉬는 시간에 항상 이어폰 꽂고 노래 듣기를 좋아합니다. 가요를 꽤 많이 알고 있어요."
        },
        {
          id: 2,
          title: "피아노",
          imgUrl: "./images/20616/20616_drawing 2.png",
          motivation: "피아노 좋아해요",
          story: "음악을 참 좋아합니다. 동요, 캐롤, 가요 다양하게 들어요."
        },
        {
          id: 3,
          title: "신나는 운동",
          imgUrl: "./images/20616/20616_drawing 3.png",
          motivation: "배드민턴 수영 축구 탁구 좋아요.",
          story: "어렸을 때부터 운동을 잘하고 좋아했다고 합니다."
        }
      ]
    },

    "20625": {
      id: "20625",
      number: "20625",
      name: "최예환",
      introKeyword: "위트 넘치는 열정 창작자",
      centerStudentImg: "./images/cute version/20625_center student cute.png",
      centerNameImg: "./images/20625/20625_center name_nobg.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          imgUrl: "./images/20625/20625_drawing 1.png",
          motivation: "동물,곤충을 좋아한다",
          story: "자연물에 관심이 많아요. 창문 밖을 지그시 관찰하는 걸 좋아해요."
        },
        {
          id: 2,
          imgUrl: "./images/20625/20625_drawing 2.png",
          motivation: "운동을 좋아한다",
          story: "열심히 운동해서 힘이 세지고 싶대요."
        },
        {
          id: 3,
          imgUrl: "./images/20625/20625_drawing 3.png",
          motivation: "그림 그리는걸 좋아한다",
          story: "홈페이지 첫 화면이 바로 예환이 작품입니다. 시키지 않았는데 친구들을 그리겠다고 했어요."
        },
        {
          id: 4,
          imgUrl: "./images/20625/20625_drawing 4.png",
          motivation: "노래 부르는걸 좋아한다",
          story: "적재 노래를 깜짝 놀랄 정도로 잘 부르더라고요. 감미로운 목소리의 소유자!! 도움반의 인기남!!"
        },
        {
          id: 5,
          imgUrl: "./images/20625/20625_drawing 5.png",
          motivation: "사진 찍는걸 좋아한다",
          story: "사진에 관심이 많아요. 멋진 풍경 사진을 보면 기분이 좋아진대요."
        },
        {
          id: 6,
          imgUrl: "./images/20625/20625_drawing 6.png",
          motivation: "웃긴걸 좋아한다",
          story: "친한 친구, 동생이 기분이 안 좋을 때, 먼저 재치있게 말 걸어주고 기분을 풀어줘요."
        }
      ]
    },

    "20419": {
      id: "20419",
      number: "20419",
      name: "김시훈",
      introKeyword: "꿈을 키우는 친구",
      centerStudentImg: "./images/20419/20419_center student.png",
      centerNameImg: "./images/20419/20419_center name.png",
      bgColor: "#FAF8F5",
      drawings: [
        {
          id: 1,
          imgUrl: "./images/20419/20419_drawing 1.png",
          motivation: "정성을 다해 완성한 나만의 첫 번째 작품입니다.",
          story: "솔직한 표현과 맑은 감성이 돋보이는 소중한 손그림입니다."
        },
        {
          id: 2,
          imgUrl: "./images/20419/20419_drawing 2.png",
          motivation: "정성을 다해 완성한 나만의 두 번째 작품입니다.",
          story: "자유로운 표현과 밝은 느낌이 담긴 손그림입니다."
        },
        {
          id: 3,
          imgUrl: "./images/20419/20419_drawing 3.png",
          motivation: "정성을 다해 완성한 나만의 세 번째 작품입니다.",
          story: "새로운 시도와 따뜻한 마음이 담긴 손그림입니다."
        },
        {
          id: 4,
          imgUrl: "./images/20419/20419_drawing 4.png",
          motivation: "정성을 다해 완성한 나만의 네 번째 작품입니다.",
          story: "개성이 돋보이는 소중한 손그림입니다."
        },
        {
          id: 5,
          imgUrl: "./images/20419/20419_drawing 5.png",
          motivation: "정성을 다해 완성한 나만의 다섯 번째 작품입니다.",
          story: "정성 가득한 필치와 따뜻한 색감이 어우러진 작품입니다."
        },
        {
          id: 6,
          imgUrl: "./images/20419/20419_drawing 6.png",
          motivation: "정성을 다해 완성한 나만의 여섯 번째 작품입니다.",
          story: "마음을 담아 정성껏 완성한 멋진 손그림입니다."
        }
      ]
    }
  }
};
