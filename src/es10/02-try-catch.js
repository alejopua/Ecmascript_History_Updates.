//Try Catch
const helloWorld = async () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 2000)
        : reject(new Error('Test Error'))
    });
};

try {
    const hello = await helloWorld();
    console.log(hello);

} catch (error) {
    console.log(error.message);
}