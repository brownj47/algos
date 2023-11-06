function isValid(s: string): boolean {
    const stack: string[] = []

    const splitString = s.split("")

    const openChars = new Set(["{", "[", "("])
    const closeChars = new Set(["}", "]", ")"])

    const closeMap = new Map()
    closeMap.set("}", "{")
    closeMap.set(")", "(")
    closeMap.set("]", "[")


    for (let i = 0; i < splitString.length; i++) {
        const character = splitString[i];

        if (openChars.has(character)) {
            stack.push(character)
            continue
        }

        const relativeOpenChar = closeMap.get(character)

        if (stack[stack.length - 1] === relativeOpenChar) {
            stack.pop()
            continue
        }
        return false
    }

    if (stack.length) { return false }
    return true
};

isValid("()")