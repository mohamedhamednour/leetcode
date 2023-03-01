const isSubsequence = (s, t) => {
    if (s.length === 0) return true

    let sPointer = 0

    for (let i = 0; i < t.length; i++) {//ahbgdc
        if (s[sPointer] === t[i]) sPointer++ //abc
    }
    return sPointer === s.length
}

let  s = "abc", t = "ahbgdc"