const app = Vue.createApp({
  data() {
    return {
      user: "nshell",
      name: "Шелепин Никита Алексеевич",

      users: ["nshell", "kpavel", "mkate"],
      names: [
        "Шелепин Никита Алексеевич",
        "Кулемин Павел",
        "Миронова Екатерия",
      ],

      pwords: ["123", "124", "125"],

      currentTab: "user-info",
      tab_names: [
        "Профиль",
        "Учебный план",
        "Рабочий план",
        "Зачетная книжка",
        "Стипендии",
      ],
      tabs: ["user-info", "study-plan", "work-plan", "grades", "scholarships"],
      login: "",
      password: "",
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.toLowerCase();
    },
  },
  methods: {
    onSubmit() {
      if (this.users.indexOf(this.login) == -1) {
        alert("WRONG");
      } else {
        if (this.password != this.pwords[this.users.indexOf(this.login)]) {
          alert("WRONG");
        } else {
          this.user = this.login;

          this.login = "";
          this.password = "";

          this.name = this.names[this.users.indexOf(this.user)];
        }
      }
    },
  },
});

