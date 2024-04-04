<template>
  <div>
    <page-header title="Dogs view"></page-header>
    <h1>Dog view</h1>
  </div>
</template>
<script>
import { PageHeader } from "@vue-mf/styleguide";

export default {
  components: { PageHeader },
  // data: () => ({
  //   dogs: JSON.parse(localStorage.getItem("dogs")) || []
  // })
};
</script>
<style scoped>
.card {
  background-color: white;
  margin: 3.2rem auto 0 auto;
  width: 75%;
  padding: 2.4rem;
}

.dogs {
  display: flex;
  flex-wrap: wrap;
}

.dog {
  margin: 1.6rem;
  max-width: 100rem;
}

.rating {
  display: flex;
  justify-content: center;
}
</style>
