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
      description: "우리 반 7명 친구들이 함께 웃으며 찍은 소중한 첫 번째 단체 추억 사진입니다."
    },
    {
      id: 2,
      title: "몸과 마음을 가꾸는 학급",
      url: "./images/cute version/group image 2.png",
      description: "다양한 학급 활동과 체험을 함께하며 몸과 마음의 성장을 다지는 두 번째 단체 추억 사진입니다."
    },
    {
      id: 3,
      title: "새로운 경험과 익숙한 경험의 조화",
      url: "./images/cute version/group image 3.png",
      description: "새로운 도전과 즐거운 일상을 공유하며 조화롭게 피어나는 세 번째 단체 추억 사진입니다."
    }
  ],

  // 3. 지적장애 학생도 한눈에 이해할 수 있도록 텍스트를 대폭 줄이고 직관적으로 단순화
  education: [
    {
      id: "baking",
      title: "제과제빵",
      icon: "🍞",
      badge: "실습",
      location: "조리실습실",
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
      location: "특별활동실",
      schedule: "2학기 매주 금요일",
      activity: "🪞 예쁜 미소와 자신감 가꾸기",
      images: []
    },
    {
      id: "handbell",
      title: "핸드벨 음악",
      icon: "🔔",
      badge: "음악",
      location: "음악실",
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
      title: "핸드벨 미니 음악회 🔔",
      date: "2026-04-15",
      tag: "행사",
      summary: "친구들과 마음을 모아 예쁜 음악 멜로디를 준비해요."
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
          imgUrl: "./images/20104/20104_drawing 1.png",
          motivation: "김정림촤연헤",
          story: "정림이가 가장 좋아하는 친구입니다. 이름은 쉿! 비밀이에요."
        },
        {
          id: 2,
          imgUrl: "./images/20104/20104_drawing 2.png",
          motivation: "♥",
          story: "좋아하는 선생님이래요. 선생님 주변에 하트가 뿅뿅 그려져있어요."
        },
        {
          id: 3,
          imgUrl: "./images/20104/20104_drawing 3.png",
          motivation: "ㅑ호갸ㅔㅕ",
          story: "누구일까? 좋아하는 친구? 가족? "
        },
        {
          id: 4,
          imgUrl: "./images/20104/20104_drawing 4.png",
          motivation: "★",
          story: "파마머리를 한 친구네요. 정림이 마음 속 누가 있는걸까요~~?"
        },
        {
          id: 5,
          imgUrl: "./images/20104/20104_drawing 5.png",
          motivation: "엄마 아빠",
          story: "정림이가 자주 말하는 단어 중에 하나입니다. 가족들과 다이소에서 쇼핑을 하나봐요."
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
          imgUrl: "./images/20105/20105_drawing 1.png",
          motivation: "귀여운 난타. 스트레스가 쌓일 때 풀리는 악기",
          story: "오랫동안 복지관에서 난타를 쳐서 실력이 베테랑입니다."
        },
        {
          id: 2,
          imgUrl: "./images/20105/20105_drawing 2.png",
          motivation: "무시무시한 악마다. 리듬게임으로 랩배틀로 승부를 냇다",
          story: "너무 귀여운 악마네요. 리듬 게임에 나오는 캐릭터라고 합니다."
        },
        {
          id: 3,
          imgUrl: "./images/20105/20105_drawing 3.png",
          motivation: "말차는 제일 좋아합니다 귀여온 고양이로 그려지다",
          story: "하음이는 말차 초콜릿, 말차 빵 등등 말차 들어간 모든 것을 다 좋아해요."
        },
        {
          id: 4,
          imgUrl: "./images/20105/20105_drawing 4.png",
          motivation: "리코더는 제일 좋아합니다 이를 리코짱! 뀨하",
          story: "하음이는 좋아하는 물건에 항상 별명을 지어줍니다. \"내 리코짱 어디있지?\" 찾아헤맵니다. \"뀨하\"는 하음이의 부캐가 내는 귀여운 소리입니다."
        },
        {
          id: 5,
          imgUrl: "./images/20105/20105_drawing 5.png",
          motivation: "좋아하는 악기에요. 별명은 렐라짱!",
          story: "점심시간, 쉬는시간 틈틈이 연습하기 바빠요. 연주할 수 있는 곡이 계속 늘어나요...(아기상어, 작은별, 곰세마리..)"
        },
        {
          id: 6,
          imgUrl: "./images/20105/20105_drawing 6.png",
          motivation: "가끔씩 스트레스가 생기면 유트부로 노래를 듣고 풀리다",
          story: "게임 중에서도 음악과 관련된 게임을 참 좋아합니다."
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
          imgUrl: "./images/20223/20223_drawing 1.png",
          motivation: "만화를 그릴 때 필요해요.",
          story: "만년필을 사용하는 만화감독을 떠올렸대요."
        },
        {
          id: 2,
          imgUrl: "./images/20223/20223_drawing 2.png",
          motivation: "일본 최초의 여성 히어로이자 j.s.p 코믹스의 주인공입니다.",
          story: "세헌이의 멋진 상상 속 슈퍼히어로 캐릭터입니다. j.s.p 코믹스라니...엄청난 세계관이 느껴지네요."
        },
        {
          id: 3,
          imgUrl: "./images/20223/20223_drawing 3.png",
          motivation: "제가 좋아하는 음식입니다.",
          story: "치킨과 더불어 세헌이의 최애 메뉴에요. 세헌이는 음식의 유래, 역사에 대해서도 아주 잘 알고 있답니다."
        },
        {
          id: 4,
          imgUrl: "./images/20223/20223_drawing 4.png",
          motivation: "일본 특촬물로 울트라 시리즈의 스핀오프 시리즈 입니다. 울트라맨에 등장한 울트라 우먼을 중심으로 이끌고 있습니다.",
          story: "화려한 의상을 입고 정의를 위해 싸우는 캐릭터를 좋아하나봐요."
        },
        {
          id: 5,
          imgUrl: "./images/20223/20223_drawing 5.png",
          motivation: "일본 만화 및 장편 티비 애니메이션 시리즈(프리큐어 올스타즈)에 주인공입니다.",
          story: "얼굴과 상의부분에 많은 디테일이 들어가고 당당한 발걸음이 느껴지는 그림입니다."
        },
        {
          id: 6,
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
          imgUrl: "./images/20413/20413_drawing 1.PNG",
          motivation: "좋아하는 명장면과 포근한 느낌을 펜으로 그리게 되었습니다.",
          story: "깔끔하고 섬세한 펜 터치로 완성된 소중한 작품입니다."
        },
        {
          id: 2,
          imgUrl: "./images/20413/20413_drawing 2.png",
          motivation: "일상 속 소소한 기쁨을 담아내고자 그렸습니다.",
          story: "솔직하고 다정한 시선이 느껴지는 그림입니다."
        },
        {
          id: 3,
          imgUrl: "./images/20413/20413_drawing 3.png",
          motivation: "디지털 기술과 나의 상상력을 결합하여 창작해낸 작품입니다.",
          story: "풍부한 색감과 신비로운 감성이 조화롭게 어우러집니다."
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
          imgUrl: "./images/20616/20616_drawing 1.png",
          motivation: "여름 안에서 듀스 스탠딩에그 오래된 노래 너에게난 나에게 넌 자전거 탄 풍경 경서 나의 X에게 밤하늘의 별을 핸드폰 듣는게 좋아요 ",
          story: "쉬는 시간에 항상 이어폰 꽂고 노래 듣기를 좋아합니다. 가요를 꽤 많이 알고 있어요."
        },
        {
          id: 2,
          imgUrl: "./images/20616/20616_drawing 2.png",
          motivation: "피아노 좋아해요",
          story: "음악을 좋아하는 건 알았지만 피아노를 좋아하는지 몰랐네요."
        },
        {
          id: 3,
          imgUrl: "./images/20616/20616_drawing 3.png",
          motivation: "정성을 다해 완성한 나만의 세 번째 작품입니다.",
          story: "마음을 담아 정성껏 완성한 소중한 손그림 작품입니다."
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
          motivation: "재미있고 엉뚱한 상상을 스케치북에 실현해보았습니다.",
          story: "보는 이로 하여금 절로 미소 짓게 만드는 재치 만점 작품입니다."
        },
        {
          id: 2,
          imgUrl: "./images/20625/20625_drawing 2.png",
          motivation: "좋아하는 요소들을 한데 모아 독창적인 그래픽으로 나타냈습니다.",
          story: "개성이 톡톡 튀는 신선한 구도가 돋보입니다."
        },
        {
          id: 3,
          imgUrl: "./images/20625/20625_drawing 3.png",
          motivation: "따뜻한 대화가 떠오르는 감성 공간을 그렸습니다.",
          story: "편안하고 아늑함을 주는 아날로그 드로잉입니다."
        },
        {
          id: 4,
          imgUrl: "./images/20625/20625_drawing 4.png",
          motivation: "손끝으로 자유롭게 그린 경쾌한 무늬와 모양입니다.",
          story: "자유로운 직관과 리듬감이 배어 있는 멋진 작품입니다."
        },
        {
          id: 5,
          imgUrl: "./images/20625/20625_drawing 5.png",
          motivation: "마음속 깊은 곳 소원을 기원하며 작성한 손그림입니다.",
          story: "진심 어린 소망과 정성이 느껴집니다."
        },
        {
          id: 6,
          imgUrl: "./images/20625/20625_drawing 6.png",
          motivation: "대작 완성의 기쁨을 담아 정성껏 마감한 작품입니다.",
          story: "풍부한 묘사와 깊이 있는 표현이 돋보이는 완성도 높은 그림입니다."
        }
      ]
    },

    "20419": {
      id: "20419",
      number: "20419",
      name: "김시훈",
      introKeyword: "꿈을 키우는 친구",
      centerStudentImg: "./images/20419/20419_center student_nobg.png",
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
