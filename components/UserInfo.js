app.component("user-info", {
  props: {
    user: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
<div class="user">
  <div class="container">
    <div class="user__inner">
      <div class="photo__cage">
        <img class="photo" :src="photo">
        <button class="photo__button">Редактировать</button>
      </div>
      <div class="info">
        <div class="info__header">
          <h3>Информация</h3>
        </div>
        <div class="info__data">
          <table class="table1">
            <tr>
              <td class="td1">Учетный номер</td>
              <td style="font-weight: 700">{{ id }}</td>
            </tr>
            <tr>
              <td class="td1">Учебное подразделение</td>
              <td style="font-weight: 700">{{ faculty }}</td>
            </tr>
            <tr>
              <td>Уровень подготовки</td>
              <td style="font-weight: 700">{{ level }}</td>
            </tr>
            <tr>
              <td>Направление подготовки</td>
              <td style="font-weight: 700">{{ division }}</td>
            </tr>
            <tr>
              <td>Направленность (профиль)</td>
              <td style="font-weight: 700">{{ speciality }}</td>
            </tr>
            <tr>
              <td>Квалификация</td>
              <td style="font-weight: 700">{{ qualification }}</td>
            </tr>
            <tr>
              <td>Форма обучения</td>
              <td style="font-weight: 700">{{ study_form }}</td>
            </tr>
            <tr>
              <td>Год поступления</td>
              <td style="font-weight: 700">{{ adm_year }}</td>
            </tr>
            <tr>
              <td>Курс</td>
              <td style="font-weight: 700">{{ year }}</td>
            </tr>
            <tr>
              <td>Группа</td>
              <td style="font-weight: 700">{{ group }}</td>
            </tr>
            <tr>
              <td>Статус обучения</td>
              <td style="font-weight: 700">{{ status }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="info2">
        <div class="info">
          <div class="info__header">
            <h3>Личная нформация</h3>
          </div>
          <div class="info__data">
            <table class="table1">
              <tr>
                <td class="td1">Логин</td>
                <td style="font-weight: 700">{{ user }}</td>
              </tr>
              <tr>
                <td class="td1">Email</td>
                <td style="font-weight: 700">{{ email }}</td>
              </tr>
              <tr>
                <td class="td1">Пол</td>
                <td style="font-weight: 700">{{ sex }}</td>
              </tr>
              <tr>
                <td class="td1">Дата рождения</td>
                <td style="font-weight: 700">{{ birthday }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="info">
          <div class="info__header">
            <h3>Контактная информация</h3>
          </div>
          <div class="info__data">
            <table class="table1">
              <tr>
                <td class="td1">Email</td>
                <td style="font-weight: 700">{{ email }}</td>
              </tr>
              <tr>
                <td class="td1">Телефон</td>
                <td style="font-weight: 700">{{ phone }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `,
  data() {
    return {
      photos: [
        "assets\\images\\photo.jpg",
        "assets\\images\\photo2.jpg",
        "assets\\images\\photo3.jpg",
      ],
      user_ids: ["001", "002", "003"],

      faculty: "Институт информационных технологий, математики и механики",
      level: "Бакалавр",
      division:
        "02.03.02 Фундаментальная информатика и информационные технологии",
      speciality: "Инженерия программного обеспечения",
      qualification: "Бакалавр",
      study_form: "Очная",
      adm_year: "2019",
      year: "2",
      group: "381906-2",
      status: "Учится",

      //login: "s1xxxxxx1",
      emails: ["kiwi0tails@gmail.com", "kpasha@yahoo.com", "mkate@gmail.com"],
      sexes: ["Мужской", "Мужской", "Женский"],
      birthdays: ["9 января", "10 января", "18 декабря"],

      phone_nums: ["+79875652771", "+79012523498", "+79524004561"],
    };
  },
  methods: {},
  computed: {
    id() {
      return this.user_ids[this.users.indexOf(this.user)];
    },
    photo() {
      return this.photos[this.users.indexOf(this.user)];
    },
    email() {
      return this.emails[this.users.indexOf(this.user)];
    },
    sex() {
      return this.sexes[this.users.indexOf(this.user)];
    },
    phone() {
      return this.phone_nums[this.users.indexOf(this.user)];
    },
    birthday() {
      return this.birthdays[this.users.indexOf(this.user)];
    },
  },
});
