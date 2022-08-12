/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 * @NAmdConfig /SuiteScripts/BB/SuiteScript.Configuration.json
 */
define(["_"], (_) => {
  return {
    getInputData: () => {
      return ["something", "another"];
    },

    map: (context) => {
      _.uniq();
    },

    summarize: (summary) => {}
  };
});
