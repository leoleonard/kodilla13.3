process.stdin.setEncoding('utf-8'); // kodowanie

console.log(process.env.username); //windows
console.log(process.version); //iOs

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '':
                process.stderr.write('Instruction is empty.');
                break;
            case  '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
        process.stdout.write(input);
    }

});
