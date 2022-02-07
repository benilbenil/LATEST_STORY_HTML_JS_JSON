
document.getElementById('button2').addEventListener('click', getJson);

// Function to get json data from a local JSON file
function getJson() {
  fetch('http://localhost:3000/getTimeStories')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        $i=0;
        let output = '<center><h2 style="color:pink;"class="mb-4">6 Latest Stories</h2></center>';
        data.forEach(function(post) {
          $i++;
          if($i<7)
          {
          output +=
          `<div class="card card-body mb-3">
           <A STYLE="background-color: rgb(255,255,0)" HREF="${post.link}">
            <h3>${post.title}</h3></A>
           <p style="font-size:25px;color:red;">${post.date}</p>
           </div>
           `
         }
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => {
        console.log(err);

        // Displaying to the UI
        document.getElementById('output').innerHTML = err;
      });
}

