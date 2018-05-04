<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://monw3c.github.io/xmui/dist/#/"
          target="_blank"
        >
          xmui
        </a>
      </li>
    </ul>
    <xm-button type="primary" icon="xm__icon--checked" >primary按钮</xm-button>
  </div>
</template>

<script>
import xmButton from 'x-m-ui/package/comps/components/button';

export default {
  name: 'HelloWorld',
  components: {
    xmButton,
  },
  data() {
    return {
      msg: `Welcome to 通用工程模板  ${this.$day().format()}`,
    };
  },
  mounted() {
    this.$http.get('https://api.douban.com/v2/book/1220562').then((response) => {
    // success callback
      console.log(response);
    }, (response) => {
      // error callback
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  font-size: 20px;
}
</style>
