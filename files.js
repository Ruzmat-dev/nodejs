const fs = require('fs')

const navoiy = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo a nobis, neque asperiores consequatur nemo magni beatae quae culpa saepe sed! Earum architecto a fugiat odio non culpa veniam numquam nulla voluptatibus facilis explicabo delectus modi sapiente, consequuntur provident similique, quis dignissimos consequatur aliquid. Autem rem corrupti ad aut veritatis nesciunt dignissimos itaque, eum, nostrum incidunt saepe! Distinctio, earum ex? Nostrum est exercitationem ab tempore nihil ad error ratione, ex recusandae unde, soluta odit sapiente quam molestiae sint eveniet, nobis facilis aspernatur fugit quo! Atque earum porro et, voluptates explicabo ratione expedita sapiente, placeat eos aspernatur accusamus officiis accusantium possimus?`

function foo(error) {
    console.log('bolad!');
    console.log(error);
}

fs.writeFile("aka.txt", navoiy , foo)