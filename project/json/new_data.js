var Application = {
  Users: [

                  {id:1,
                  username: 'Tolik',
                  firstName: 'jkghjdfg',
                  lastName: 'fdghfgdjj',
                  group: '',
                  role_id: 1,
                  location: "Ukraine",
                  email: "tarasklyushta@gmail.com",
                  password: "4321",
                  re_passwd: "4321",
                  birthday: "28-12-1990",
                  statusname: '',
                  org_level: '',

                  org_troop: "some troop",
                  org_region: "Івано-Франківськ",
                  org_group: "some group",
                  login_status: 0
                    

                     

                  },


                  {id:2,
                  username: 'Vasyl',
                  firstName: 'jkghjdfg',
                  lastName: 'fdghfgdjj',
                  group: '',
                  role_id: 2,
                  location: "Ukraine",
                  email: "tarasklyushta@gmail.com",
                  password: "4321",
                  re_passwd: "4321",
                  birthday: "28-12-2001",
                  statusname: '',
                  org_level: '',
                  org_troop: "some troop",
                  org_region: "Івано-Франківськ",
                  org_group: "some group",
                  login_status: 0
                    
                  },
                  {id:3,
                  username: 'Valera',
                  firstName: 'sdgdh',
                  lastName: 'sdfdgg',
                  group: '',
                  role_id: 3,
                  location: "Ukraine",
                  email: "tarasklyushta@gmail.com",
                  password: "1234",
                  re_passwd: "1234",
                  birthday: "28-12-1998",
                  statusname: '',
                  org_level: '',
                  org_troop: "some troop",
                  org_region: "Івано-Франківськ",
                  org_group: "some group",
                  login_status: 0
                    
                  },
                  {id:4,
                  username: 'Vova',
                  firstName: 'dfsgjfj',
                  lastName: 'fgsjgjgj',
                  group: '',
                  role_id: 1,
                  location: "Ukraine",
                  email: "tarasklyushta@gmail.com",
                  password: "1234",
                  re_passwd: "1234",
                  birthday: "28-12-1984",
                  statusname: '',
                  org_level: '',
                  org_troop: "some troop",
                  org_region: "Івано-Франківськ",
                  org_group: "some group",
                  login_status: 0
                    
                  }
                                

      ],
  Tests: [
         {id: 1,
          user_owner_id: 1,
          name: "Правила дорожнього руху",
          author: "Tolik",
          description: "Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!",
          tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
          question: [
                {
                  id: 1,
                  text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
                }, 
                {
                  id: 2,
                  text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
                },
                {
                  id: 3,
                  text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
                }
              ],
          answers: [
                {
                  id: 1,
                  question_id: 1,
                  text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
                }, 
                {
                  id: 2,
                  question_id: 1,
                  text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
                },
                {
                  id: 3,
                  question_id: 1,
                  text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
                },
                {
                  id: 4,
                  question_id: 2,
                  text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
                }, 
                {
                  id: 5,
                  question_id: 2,
                  text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
                },
                {
                  id: 6,
                  question_id: 2,
                  text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
                },
                {
                  id: 7,
                  question_id: 3,
                  text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
                },
                {
                  id: 8,
                  question_id: 3,
                  text_answer: 'Проїхати пішохідний перехід беззупинно.'
                },
                {
                  id: 9,
                  question_id: 3,
                  text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
                }
              ],
          correct_answer: [
                  {
                    question_id: 1,
                    answer_id: 2
                  },
                  {
                    question_id: 2,
                    answer_id: 5
                  },
                  {
                    question_id: 3,
                    answer_id: 7
                  }
                  ],
          info: ['info1', 'info2'],
          status: {
              id:1,
              name_status: "опублікований"
              },
          subcategory: 4,

          //category: 1,
          date: 1401211224657,

          category: 1,
                  passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657, 1401781659361] 

         },
         {id: 2,
          user_owner_id: 3,
          name: "Highway code",
          author: "John Dou",
          description: "Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!",
          tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
          question: [
                {
                  id: 1,
                  text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
                }, 
                {
                  id: 2,
                  text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
                },
                {
                  id: 3,
                  text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
                }
              ],
          answers: [
                {
                  id: 1,
                  question_id: 1,
                  text_answer: '!!!!!!!!!!!!!!!!!!!!!Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
                }, 
                {
                  id: 2,
                  question_id: 1,
                  text_answer: '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
                },
                {
                  id: 3,
                  question_id: 1,
                  text_answer: '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
                },
                {
                  id: 4,
                  question_id: 2,
                  text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
                }, 
                {
                  id: 5,
                  question_id: 2,
                  text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
                },
                {
                  id: 6,
                  question_id: 2,
                  text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
                },
                {
                  id: 7,
                  question_id: 3,
                  text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
                },
                {
                  id: 8,
                  question_id: 3,
                  text_answer: 'Проїхати пішохідний перехід беззупинно.'
                },
                {
                  id: 9,
                  question_id: 3,
                  text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
                }
              ],
          correct_answer: [
                  {
                    question_id: 1,
                    answer_id: 2
                  },
                  {
                    question_id: 2,
                    answer_id: 5
                  },
                  {
                    question_id: 3,
                    answer_id: 7
                  }
                  ],
          info: ['info1', 'info2'],
          status: {
              id:1,
              name_status: "опублікований"
              },
          subcategory: 11,

          //category: 1,
          date: 1401231224657,

          category: 3,
                  passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657, 1401781659361] 

         }         
      ],
  Tests_categories: [
            {
              id: 1,
              name: "Спорт",
              parent_id: 0,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Application.Tests_categories.length ; i++ ) {
                                    if ( Application.Tests_categories[i].parent_id === id) {
                                        result.push(Application.Tests_categories[i]);
                                    };
                                };
                                return result;
                            }
            },
            {
              id: 2,
              name: "туризм",
              parent_id: 0,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Application.Tests_categories.length ; i++ ) {
                                    if ( Application.Tests_categories[i].parent_id === id) {
                                        result.push(Application.Tests_categories[i]);
                                    };
                                };
                                return result;
                            }
            },
            {
              id: 3,
              name: "пдр",
              parent_id: 0,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Application.Tests_categories.length ; i++ ) {
                                    if ( Application.Tests_categories[i].parent_id === id) {
                                        result.push(Application.Tests_categories[i]);
                                    };
                                };
                                return result;
                            }
            },
            {
              id: 4,
              name: "підкатегорія",
              parent_id:1,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 5,
              name: "підкатегорія",
              parent_id:1,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 6,
              name: "підкатегорія",
              parent_id:1,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 7,
              name: "підкатегорія",
              parent_id:2,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 8,
              name: "підкатегорія",
              parent_id:2,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            }
            },
            {
              id: 9,
              name: "підкатегорія",
              parent_id:2,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 10,
              name: "підкатегорія",
              parent_id:3,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 11,
              name: "підкатегорія",
              parent_id:3,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            },
            {
              id: 12,
              name: "підкатегорія",
              parent_id:3,
                            getSubcategories: function(id) {
                                var result = [];
                                for ( var i = 0 ; i < Categories.length ; i++ ) {
                                    if ( Categories[i].parent_id === id) {
                                        result.push(Categories[i]);
                                    };
                                };
                                return result;
                            } 
            } 

          ],

    

 Result: [
    {   id: 1,
        u_id : 1,
        name : 'Test Name1',
        test_id: 1,
        passed_date: 1391431224657,
        score : 11,
        user_rank: 1

    },
    {   id: 2,
        u_id : 3,
        name : 'Test Name2',
        test_id: 2,
        passed_date: 1301431224657, 
        score : 4,
        user_rank: 2

    },
    {   id: 3,
        u_id : 2,
        name : 'Test Name2',
        test_id: 2,
        passed_date:1390718456676,
        score : 3,
        user_rank: 2

    },
    {   id: 4,
        u_id : 2,
        name : 'Test Name2',
        test_id: 2,
        passed_date:1499031224657,
        score : 1,
        user_rank: 1

    },
    {   id: 5,
        u_id : 4,
        test_id: 6,
        name : 'Test Name6',
        passed_date:1201431224657,
        score : 7,
        user_rank: 3

    },
    {   id: 6,
        u_id : 2,
        name : 'Test Name4',
        test_id: 4,
        passed_date:1401818456676,
        score : 8,
        user_rank: 4

    }
],
    User_roles: [
          {
            id: 1,
            role_name: "авторизований користувач"
          },
          {
            id: 2,
            role_name: "модератор"
          },  
          {
            id: 3,
            role_name: "адміністратор"

          }

        ],
    Ranks: [
          {
            id:1,
            name: 'Ступінь 1'
          },
          {
            id:2,
            name: 'Ступінь 2'
          },
          {
            id:3,
            name: 'Ступінь 3'
          },
          {
            id:4,
            name: 'Ступінь 4'
          },
    ]    
}
function model(date_in){
  if(!localStorage.Application){
    console.log('loc false');
    localStorage.Application = JSON.stringify(date_in);
  }
  this.save_localStorage = function(){
    localStorage.Application = JSON.stringify(this.date);
  }
    this.load_localStorage = function(){
        this.date = JSON.parse(localStorage.Application);
    }
}
var Model = new model(Application);
Model.load_localStorage();

//console.log(Model.date);



/*

var Users = [
{
    id: '0',
        username: 'admin',
        location: 'Ukraine',
        group: 3,
        firstName: 'John',
    lastName: 'Dou',
        org_level: 'початківець',
        password: 'admin',
        email: 'admin@admin.com',
        birthday: '2001-05-10',
    org_troop: 'бурлаки',
    org_region: 'вовчинці',
    org_group: 2,
  login_status: 0
    },
    {
    id: '1',
        username: 'AUser',
        location: 'Ukraine',
        group: 3,
        firstName: 'Петро',
    lastName: 'Петрович',
        org_level: 3,
        password: '1111',
        email: 'admin@admin.com',
        birthday: '1991-05-19',
    org_troop: 'same_value',
    org_region: 'Івано-Франківськ',
    org_group: 2,
  login_status: 0
    }, {
      id: '2',
        username: 'guest',
        location: 'Ukraine',
        group: 3,
        firstName: 'Jake',
    lastName: 'Smith',
        org_level: 2,
        password: 'guest',
        email: 'guest@guest.com',
        birthday: '2008-05-21',
    org_troop: '_same_value',
    org_region: 'same_value',
    org_group: 3,
    org_troop: 'value',
    org_group: 3,
  login_status: 0,
    testScore:[5, 7, 4, 3, 9],
    testPast:['Test Name1','Test Name2','Test Name3','Test Name4','Test Name5',],
    testDate:[]
  
    }


]
*/
/*
question:
  id - унікальний номер запитання в полі question, в межах одного обєкта з масиву Tests
  text - текст самого запитання
answers
  id - унікальний номер відповіді в полі answers, в межах одного обєкта з масиву Tests
  question_id - вказує на запитання, якому належить дана відповід(тобто якшо question_id = 1 то це означає шо ця відповідь відноситься до запитання яке має id=1)
  text_answer - текст самої відповіді
correct_answers
  question_id - вказує  до якого запитання належить
  answer_id - вказує яка відповідь є правильна(тобто якшо question_id = 1 і answer_id = 3 то це означає шо для запитання (question) з id = 1 правильна відповідь буде з (answers) id = 3)

  
  впринципі можна було б обійтися без поля question_id в correct_answers, але так буде лекше  формувати дані... 
  */
  /*
var Tests = [
{
    name: 'Правила дорожнього руху',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657, 1401781659361]
},
{
    name: 'Тест 2',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
},
{
    name: 'Тест 3',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
},
{
    name: 'Тест 4',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
},
{
    name: 'Тест 5',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
},
{
    name: 'Тест 6',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
},
{
    name: 'Тест 7',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
},
{
    name: 'тест 8',
    tags: ['зупинитися', 'тег4', 'тег3', 'тег5', 'тег2'],
    descr: 'Представляємо екзаменаційні білети ДАІ по 20 питань у кожному. Тести з ПДР містять пояснення до правильних відповідей, інтерактивні посилання на відповідні пункти Правил дорожнього руху, можливість задати питання і отримати відповідь, вибір режиму перевірки знань. Пройдеш усі — сміливо здавай екзамен у ДАІ!',
    author: 'John Dou',
    question: [{
        id: 1,
        text: 'Чи мають перевагу сигнали регулювальника перед вимогами дорожніх знаків?'
    }, {
        id: 2,
        text: 'Чи дозволяється керувати автомобілем в темну пору доби або в умовах недостатньої видимості, якщо включені тільки габаритні ліхтарі?'
    }, {
        id: 3,
        text: ' Ви наближаєтеся до нерегульованого пішохідного переходу, перед яким на суміжній з Вами смузі зупинився транспортний засіб. Ви повинні'
    }],
    answers: [{
        id: 1,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 2,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 3,
        question_id: 1,
        text_answer: 'Мають перевагу тільки перед вимогами дорожніх знаків пріоритету і є обовязковими для виконання'
    }, {
        id: 4,
        question_id: 2,
        text_answer: ' Дозволяється на освітленій дорозі у населених пунктах'
    }, {
        id: 5,
        question_id: 2,
        text_answer: 'Дозволяється на освітленій дорозі у населених пунктах.'
    }, {
        id: 6,
        question_id: 2,
        text_answer: 'Дозволяється під час швидкості руху не більше 50 км/год.'
    }, {
        id: 7,
        question_id: 3,
        text_answer: ' Проїхати пішохідний перехід безупинно, але з особливою обережністю.'
    }, {
        id: 8,
        question_id: 3,
        text_answer: 'Проїхати пішохідний перехід беззупинно.'
    }, {
        id: 9,
        question_id: 3,
        text_answer: 'Обовязково зупинитися. При появі пішоходів пропустити їх.'
    }],
    correct_answers: [{
        question_id: 1,
        answer_id: 2
    },{
        question_id: 2,
        answer_id: 3
    },{
        question_id: 3,
        answer_id: 1
    }],
    info: ['info1', 'info2'],
  public: 0,
    subcategory: 4,
    category: 1,
    correct_answers: ['Aenean ut consequat velit'],
    url: 'tests/test1.html',
    date: '1',
    passed_date: [1401211224657, 1401231224657, 1401431224657, 1301431224657, 1201431224657]
}

]
var Categories = [
  {
    id: 1,
    name: "Спорт",
    parent_id: 0
  },
  {
    id: 2,
    name: "туризм",
    parent_id: 0
  },
  {
    id: 3,
    name: "пдр",
    parent_id: 0
  },
  {
    id: 4,
    name: "підкатегорія",
    parent_id:1 
  },
  {
    id: 5,
    name: "підкатегорія",
    parent_id:1 
  },
  {
    id: 6,
    name: "підкатегорія",
    parent_id:1 
  },
  {
    id: 7,
    name: "підкатегорія",
    parent_id:2 
  },
  {
    id: 8,
    name: "підкатегорія",
    parent_id:2
  },
  {
    id: 9,
    name: "підкатегорія",
    parent_id:2 
  },
  {
    id: 10,
    name: "підкатегорія",
    parent_id:3 
  },
  {
    id: 11,
    name: "підкатегорія",
    parent_id:3 
  },
  {
    id: 12,
    name: "підкатегорія",
    parent_id:3 
  } 
  
]
var Result = [
  {
    u_id : 1,
    name : 'Test Name1',
    passed_date: 1391431224657,
    score : 11,
  },
  {
    u_id : 3,
    name : 'Test Name2',
    passed_date: 1381431224657, 
    score : 4,
  },
  {
    u_id : 2,
    name : 'Test Name2',
    passed_date:1499031224657,
    score : 3,
  },
  {
    u_id : 2,
    name : 'Test Name2',
    passed_date:1499031224657,
    score : 1,
  },
  {
    u_id : 4,
    name : 'Test Name6',
    passed_date:1499031224657,
    score : 7,
  },
  {
    u_id : 5,
    name : 'Test Name4',
    passed_date:1499031224657,
    score : 8,
  }
];

var newCategories = [
  {
    id:1,
    name:"Category1",
    type:"Category",
    items:[]
  },

  {
    id:2,
    name:"Category2",
    type:"Category",
    items:[
      {
        id:11,
        name:"SubCategory1",
        type:"SubCategory",
        items:[]
      },
      {
        id:12,
        name:"SubCategory2",
        type:"SubCategory",
        items:[]
      }
    ]
  }
];
*/