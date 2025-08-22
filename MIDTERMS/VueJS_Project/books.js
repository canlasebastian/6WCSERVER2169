const books = Vue.createApp({
  data(){
    return {
      showBooks: true,
      btitle: 'The Ledger',
      bauthor: 'Sebastian Canlas',
      year: 2004
    }
  },
  methods:{
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    }
  }
});
books.mount('#books')
