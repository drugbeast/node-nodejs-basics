const parseEnv = () => {
    let res = ''
    for (const key in process.env) {
        if (key.includes('RSS_'))  (res += `${key}=${process.env[key]}; `)
    }
    res = res.slice(0, res.length - 2)
    console.log(res)
};

parseEnv();