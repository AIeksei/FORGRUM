import axios from "axios";
const AxiosCreateNewBranch = (tags, title, text, id, code, navigate)=>{
    console.log(tags + " " + title + " " + text + " " + id + " " + code); 
    const checker = true;
    axios.post("http://localhost:8080/posts", {
        'title': title,
        'text': text,
        'postOwnerID': id
      },
        {
          headers: {
            Authorization: 'Basic ' + code
          }
        }).then(function (res) {
        let postIdd = res.data.id;
          let TagArr = tags.split(', ');
          sendRequestTags(TagArr, postIdd, code);
          navigate(`/branch/${postIdd}`, { replace: true });
        }).catch(function (e) {
          alert(e)
          checker = false;
        })
    }

    const sendRequestTags = async (tagArr, postIdd, code) => {
      for (let i = 0; i < tagArr.length; i++) {
        const tag = tagArr[i];
        await axios.post("http://localhost:8080/tags", {
          'tag': tagArr[i],
          'postID': postIdd
        },
          {
            headers: {
              Authorization: 'Basic ' + code
            }
          });
      }
    }
    export {AxiosCreateNewBranch};