// then method
(async () => {
    // await fetch('./assets/data/questions.json')
    //     .then((res) => {
    //         // const question = res.json();
    //         // console.log(res)
    //         // res.json()

    //         return res.json()
    //     }).then((ques) => {
    //         console.log(ques)
    //     }).catch((er) =>  {
    //         console.warn('an error ocurred')
    //     }).finally(() => {
    //         console.log('operation  completed')
    //     });

    // console.log('after api fetch')

    //try catch block
    try {
        const questions = await fetch('./assets/data/questions.json')
            .then((res) => res.json());

        console.log(questions)
    } catch (error) {
        console.log('an error ocurred');
    } finally {
        console.log('operation completed')
    }
})();