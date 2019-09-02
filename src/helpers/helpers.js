import chatacters_json from '../data/chatacters.json';
export default function createChatacter(id){
    let char=chatacters_json.find(c=>c.id===id);
    return char;
}