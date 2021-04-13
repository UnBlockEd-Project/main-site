<template>
  <div id="demo">
    <div id="select">
      Selected the display type:
      <select v-model="selectedType">
        <option v-for="type in types" :value="type" v-bind:key="type">
          {{ type }}
        </option>
      </select>
    </div>

    <component
      :terms="terms"
      term-identifier="Semester"
      :custom-term-name="false"
      :is="selectedType"
    ></component>
  </div>
</template>

<script>
import vueDegreePlan, {
  Plan,
  Grid,
  Graph,
  planItemNames,
  formatTerms,
  getItemCourse,
} from '@unm-idi/vue-degree-plan';
import planTermData from './planTermData';

export default {
  data() {
    return {
      selectedType: 'Plan',
      types: ['Plan', 'Grid', 'Graph'],
      terms: formatTerms(planTermData),
    };
  },
  components: {
    Plan,
    Grid,
    Graph,
  },
};
</script>

<style>
#select {
  display: inline-block;
  padding: 15px;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 20px auto;
  display: table;
}

#select select {
  font-size: 15px;
  border: 1px solid #444;
  margin-left: 10px;
  cursor: pointer;
  width: 100px;
}
</style>
