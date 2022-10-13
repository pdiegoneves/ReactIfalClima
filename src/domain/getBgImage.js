function getBgImage(condition){
  switch(condition) {
    case '0':
    case '1':
    case '3':
    case '4':
    case '37':
    case '38':
    case '39':
    case '47': return { uri: "https://images.unsplash.com/photo-1516490981167-dc990a242afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
    case '2': return { uri: "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80" }
    case '5':
    case '42': return { uri: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
    case '6': return { uri: "https://images.unsplash.com/photo-1612633118602-5a412e3cba19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '7': return { uri: "https://images.unsplash.com/photo-1609924814565-2e67ba5c4a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '8': return { uri: "https://images.unsplash.com/photo-1611185772530-2ab31d6ba876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" }
    case '9':
    case '11':
    case '12': 
    case '40': 
    case '45': return { uri: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '10': return { uri: "https://images.unsplash.com/photo-1643823281355-903edf4dab2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '13': return { uri: "https://images.unsplash.com/photo-1543345348-52bccd666e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
    case '14':
    case '15': 
    case '16':
    case '41':
    case '43':
    case '46': return { uri: "https://images.unsplash.com/photo-1610468911283-e004c9d1b0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" }
    case '17': return { uri: "https://images.unsplash.com/photo-1581723012730-b266d033c36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
    case '18': return { uri: "https://images.unsplash.com/photo-1578323851363-cf6a1a6afbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=478&q=80" }
    case '19': return { uri: "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" }
    case '20': return { uri: "https://images.unsplash.com/photo-1560642659-bcad3d4c9b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" }
    case '21': return { uri: "https://images.unsplash.com/photo-1593076436092-6f54229aca1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80g" }
    case '22': return { uri: "https://images.unsplash.com/photo-1516282356642-67639b5fad46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '23':
    case '24': return { uri: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }
    case '25': return { uri: "https://images.unsplash.com/photo-1612220343549-3d33b739e50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '26': 
    case '28': 
    case '29':
    case '30': return { uri: "https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" }
    case '27':
    case '31': return { uri: "https://images.unsplash.com/photo-1616249807402-9dae436108cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }
    case '32': return { uri: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '33': return { uri: "https://images.unsplash.com/photo-1628498188904-036f5e25e93e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" }
    case '34':
    case '44': return { uri: "https://images.unsplash.com/photo-1466527496777-6ed64c30572e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" }
    case '35': return { uri: "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
    case '36': return { uri: "https://images.unsplash.com/photo-1553456408-09e017af8d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }
    case '48': return { uri: "https://images.unsplash.com/photo-1619379104123-51f1de307c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" }
  }
}

export default getBgImage