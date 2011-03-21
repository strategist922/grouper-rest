var exports = module.exports = {
  forDocument: function (namespace, collectionKey, id) {
    return {
      ns: namespace
    , ck: collectionKey
    , id: id
    }
  }
, forCluster: function (namespace, collectionKey, label, maybeTimestamp) {
    return {
      confName: "DEFAULT"
    , ns: namespace
    , ck: collectionKey
    , ts: maybeTimestamp || null
    , label: label
    }
  }
, forAllClusters: function (namespace, collectionKey, maybeTimestamp) {
    return {
      confName: "DEFAULT"
    , ns: namespace
    , ck: collectionKey
    , ts: maybeTimestamp || null
    }
  }
}