
with open("words.txt", "r", encoding='utf-8') as f:
    words = f.read().splitlines()
    print(words)
    for i in range(len(words)):
        words[i] = words[i].lower()
    words.sort()
    with open("newWords.txt", "w", encoding='utf-8') as f:
        f.write('\n'.join(words))
