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

  groupImages: [
    {
      id: 1,
      title: "함께해서 더 즐거운 우리 반",
      url: "./images/cute version/group image 1.png"
    },
    {
      id: 2,
      title: "몸과 마음을 모두 가꾸는 학급 활동",
      url: "./images/cute version/group image 2.png"
    },
    {
      id: 3,
      title: "새로운 경험과 익숙한 경험의 조화",
      url: "./images/cute version/group image 3.png"
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
      schedule: "매주 화요일",
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
      summary: "우리 반 6명 친구들과 함께 즐거운 학교 생활을 시작해요!"
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
          motivation: "내가 가장 좋아하는 캐릭터와 힐링되는 순간을 표현하고 싶어서 그리게 되었습니다.",
          story: "마음이 편안해지는 유쾌하고 귀여운 그림입니다. 밝은 색감과 개성 있는 선 표현이 인상적입니다."
        },
        {
          id: 2,
          imgUrl: "./images/20104/20104_drawing 2.png",
          motivation: "상상 속의 즐거운 풍경을 정성스럽게 담았습니다.",
          story: "자유로운 표현력과 솔직한 감정이 돋보이는 작품입니다."
        },
        {
          id: 3,
          imgUrl: "./images/20104/20104_drawing 3.png",
          motivation: "친구들과 함께 나눈 행복한 기억에서 아이디어를 얻었습니다.",
          story: "아기자기한 분위기로 마음을 따뜻하게 만들어주는 소중한 그림입니다."
        },
        {
          id: 4,
          imgUrl: "./images/20104/20104_drawing 4.png",
          motivation: "좋아하는 동식물의 다정한 모습을 스케치했습니다.",
          story: "손끝에서 묻어나는 섬세함이 돋보입니다."
        },
        {
          id: 5,
          imgUrl: "./images/20104/20104_drawing 5.png",
          motivation: "내 마음속 작은 보물상자를 상상하며 그렸습니다.",
          story: "단순하지만 강렬한 인상을 주는 개성 넘치는 드로잉입니다."
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
          motivation: "신나는 음악을 들을 때 느껴지는 감정을 그림으로 옮겼습니다.",
          story: "리드미컬하고 율동감이 느껴지는 예쁜 손그림입니다."
        },
        {
          id: 2,
          imgUrl: "./images/20105/20105_drawing 2.png",
          motivation: "내가 바라는 멋진 모습과 내일을 표현하고자 했습니다.",
          story: "희망차고 화사한 분위기가 보는 사람을 미소 짓게 합니다."
        },
        {
          id: 3,
          imgUrl: "./images/20105/20105_drawing 3.png",
          motivation: "좋아하는 계절의 햇살을 정성껏 그린 그림입니다.",
          story: "포근한 색채 감각이 잘 드러나 있는 아기자기한 작품입니다."
        },
        {
          id: 4,
          imgUrl: "./images/20105/20105_drawing 4.png",
          motivation: "귀여운 동물의 정겨운 한때를 관찰하여 그렸습니다.",
          story: "사랑스럽고 정성이 듬뿍 들어간 그림입니다."
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
          motivation: "미래의 나의 보금자리를 상상하며 완성했습니다.",
          story: "따뜻하고 아늑한 풍경을 자아내는 감성적인 그림입니다."
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
          story: "만화를 그리는 도구도 잘 알아요."
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
          story: "세헌이는 화려한 의상을 좋아해요."
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
          story: "화려한 전사 캐릭터가 아닌 귀여운 동물 캐릭터도 좋아하는군요~"
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
          imgUrl: "./images/20413/20413_drawing 2.jpg",
          motivation: "일상 속 소소한 기쁨을 담아내고자 그렸습니다.",
          story: "솔직하고 다정한 시선이 느껴지는 그림입니다."
        },
        {
          id: 3,
          imgUrl: "./images/20413/ChatGPT Image 2026년 7월 1일 오전 09_38_10.png",
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
          motivation: "나만의 소중한 목표와 꿈을 형상화하고 싶었습니다.",
          story: "선명하고 단단한 선 표현에 성윤이의 정성이 깊게 배어있습니다."
        },
        {
          id: 2,
          imgUrl: "./images/20616/20616_drawing 2.png",
          motivation: "즐거운 학교 생활 중 기억에 남는 장면을 그렸습니다.",
          story: "밝은 에너지와 순수한 감동을 전해주는 감성적 아트워크입니다."
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
    }
  }
};
