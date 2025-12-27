

Regulă: 

1. Monografism lacom – cea mai mare unitate: Alege cea mai lungă variantă și și la foneme și la grafeme   
2. Maparea perfectă: Dacă grafemul sau grafemele nu corespund cu ce propune/are în baza de date/cu ce se mapează fonemul, fonemul se duce mai departe   
3. Grafemele devin gri dacă nu au fost consumate de fonem/nu au convenit fonemului și acesta s-a dus mai departe cu un grafem: i+n  
4. Primul grup vocalic după accentul primar (**‘**) se subliniază

5. /ə/ obligatoriu mapare la \\V. Dacă  incearcă mapări cu consoane, asta nu il afectează, el continuă să caute grafemul /V/ și dacă /V/ existî până la \\С schwa se mapeaza pe el, si doar daca \\V nu există pînă la \\C, atunci se aplica formula: /ə/ eșec mapare /V/\_\\V înainte de \\C=/C/ din /əC/, automat și obligatoriu fuziune cu /C/ din /əC/ din care scрwa face parte. Fonem rezultat /C̩/  
   

**Ierarhia Schwa  /ə/:** 

* **Pas 1 (Căutare):** Caută  \\V  în  \\text{Range} \= \[i \\dots index\\\_C \- 1\] . Succes  \\to  **Negru** (Restul din  \\text Range  devine **GRI**).


* **Pas 2 (Fuziune):** Eșec Pas 1  \\to   /ə/ \+ /C/ \= /C̩/ . Rezultat: **Alb cu chenar negru**.


Întâi **Căutarea** (Negru), dacă eșuează  \\to  **Fuziunea** (Alb/Chenar).

1. **PASUL 1 (Căutarea):** Caută  \\V  în  \\text{Range} .  
   * **Succes:**  /ə/  se mapează pe  \\V   \\to  **Negru**. (Restul din  \\text{Range}  \= **GRI**).  
2. **PASUL 2 (Fuziunea):** Dacă nu există  \\V  în  \\text{Range} .  
   * **Acțiune:**  /ə/ \+ /C/ \= /C̩/ .  
   * **Rezultat:** Grafemul devine **Alb cu chenar negru** (ex:  \[ŗ\], \[n̩\] ).

**Definiții:**

*  **i** : Index grafem curent.  
*  **index\\\_C** : Poziția consoanei următoare.  
*  **\\text{Range}** :  \[i \\dots index\\\_C \- 1\] .

---

**🐍 Logică Cod (Scurt)**

Python  
if V\_in\_Range:  
    map(/ə/, V) \# Rezultat: Negru  
else:  
    fuziune(/ə/, C) \# Rezultat: Alb cu chenar negru

    \# Rezultat: /C̩/ pe 'n', tot Range-ul devine GRI 

| Fonem IPA | Grafem Englez | Grafem EiC  (cu diacritic sau fără) | Culoare | Exemple Lexicale de rezultat final EiC | Observații |
| :---- | :---- | :---- | :---- | :---- | :---- |
| /b/ | b | b | Negru (\#000000) | bat, beautiful |  |
| /b/ | bb | bb | Negru (\#000000) | rabbit, rubber |  |
| /d/ | d | d | Negru (\#000000) | dog |  |
| /d/ | dd | dd | Negru (\#000000) | address |  |
| /dʒ/ | j | j | Negru (\#000000) | jam |  |
| /dʒ/ | g | ğ | Negru (\#000000) | barğe |  |
| /dʒ/ | gg | ğğ | Negru (\#000000) | veğğieṡ |  |
| /dʒ/ | dg | dğ | Negru (\#000000) | bridğe |  |
| /dʒ/ | dj | dj | Negru (\#000000) | adjust |  |
| /g/ | g | g | Negru (\#000000) | good, go |  |
| /g/ | gg | gg | Negru (\#000000) | egg |  |
| /f/ | f | f | Negru (\#000000) | fun, funny |  |
| /f/ | ff | ff | Negru (\#000000) | off |  |
| /f/ | ph | ph | Negru (\#000000) | phone, graph |  |
| /f/ | gh | gh | Negru (\#000000) | enough |  |
| /h/ | h | h | Negru (\#000000) | hat, he |  |
| /x/ | h | h | Negru (\#000000) | loch |  |
| /tʃ/ | ch | ch | Negru (\#000000) | chair, church |  |
| /tʃ/ | tch | tch | Negru (\#000000) | watch |  |
| /tʃ/ | c | c̈ | Negru (\#000000) | c̈ello |  |
| /tʃ/ | t | ẗ | Negru (\#000000) | S**i**ẗuation, culẗure,staẗue |  |
| /k/ | k | k | Negru (\#000000) | k**i**ng |  |
| /k/ | c | c | Negru (\#000000) | cat |  |
| /k/ | cc | cc | Negru (\#000000) | accommodate |  |
| /k/ | ck | ck | Negru (\#000000) | black |  |
| /k/ | cq | cq | Negru (\#000000) | acquaintant |  |
| /k/ | q | q | Negru (\#000000) | queen |  |
| /l/ | l | l | Negru (\#000000) | leg |  |
| /l/ | ll | ll | Negru (\#000000) | fall |  |
| /m/ | m | m | Negru (\#000000) | man |  |
| /m/ | mm | mm | Negru (\#000000) | summer |  |
| /n/ | n | n | Negru (\#000000) | net |  |
| /n/ | nn | nn | Negru (\#000000) | funny |  |
| /ŋ/ | ng | ng | Negru (\#000000) | sing |  |
| /ŋ/ | n | n | Negru (\#000000) | Bank, tank, uncle, funct̂ion |  |
| /ŋg/ | ng | ng | Negru (\#000000) | congress |  |
| /p/ | p | p | Negru (\#000000) | pen, pronunciation |  |
| /p/ | pp | pp | Negru (\#000000) | happy |  |
| /r/ | r | r | Negru (\#000000) | red |  |
| /r/ | rr | rr | Negru (\#000000) | better | EiC este rotic |
| /s/ | s | s | Negru (\#000000) | sun, success |  |
| /s/ | ss | ss | Negru (\#000000) | success |  |
| /s/ | sc | sƈ | Negru (\#000000) |  |  |
| /s/ | c | ƈ | Negru (\#000000) | ƈircus |  |
| /s/ | cc | ƈƈ | Negru (\#000000) | sucƈess |  |
| /ʃ/ | sh | sh | Negru (\#000000) | she, fish |  |
| /ʃ/ | c | ĉ | Negru (\#000000) | oĉean |  |
| /ʃ/ | ch | ĉĥ | Negru (\#000000) | ĉĥef |  |
| /ʃ/ | s | ŝ | Negru (\#000000) | ŝure |  |
| /ʃ/ | ss | ŝŝ | Negru (\#000000 | miŝŝion |  |
| /ʃ/ | sch | ŝĉĥ | Negru (\#000000) | borŝĉĥ |  |
| /ʃ/ | sc | ŝĉ | Negru (\#000000) | faŝĉism |  |
| /ʃ/ | t | t̂ | Negru (\#000000) | nat̂ion |  |
| /t/ | t | t | Negru (\#000000) | t**o**p |  |
| /t/ | tt | tt | Negru (\#000000) | letter |  |
| /θ/ | th | tɦ | Negru (\#000000) | thin, think |  |
| /ð/ | th | th | Negru (\#000000) | this, father |  |
| /v/ | v | v | Negru (\#000000) | van, vote |  |
| /v/ | ph | ph | Negru (\#000000) | Stephen |  |
| /v/ | f | ᵮ | Negru (\#000000) | oᵮ |  |
| /z/ | z | z | Negru (\#000000) | zoo |  |
| /z/ | zz | zz | Negru (\#000000) | fizz |  |
| /z/ | s | ṡ | Negru (\#000000) | roṡe |  |
| /z/ | sc | ṡƈ | Negru (\#000000) | crescent |  |
| /z/ | x | ẋ | Negru (\#000000) | ẋylophone |  |
| /ʒ/ | s | š | Negru (\#000000) | vision, measure  television |  |
| /ʒ/ | g | ǧ | Negru (\#000000) | mirage |  |
| /w/ | w | w | Negru (\#000000) | water, win |  |
| /w/ | u | ű | Negru (\#000000) | qűeen |  |
| /gz/ | x | ӿ | Negru (\#000000) | eӿample |  |
| /ks/ | x | x | Negru (\#000000) | sex |  |
| /ks/ | cc | cƈ | Negru (\#000000) | acƈept |  |
| /ksh/ | x | x̄ | Negru (\#000000) | sex̄ual |  |
| /j/ | y, i | ỷ, ỉ | roșu |  |  |
| \[l̩\]   | l ll | l ll | Alb cu chenar negru |  |  |
| \[n̩\] | n nn | n nn  | Alb cu chenar negru |  |  |
| \[m̩\] | m mm | m mm | Alb cu chenar negru |  |  |
| \[k̩\] | c ck cc kk | c ck cc kk | Alb cu chenar negru |  |  |
| \[ŗ\] | r | r | Alb cu chenar negru |  |  |
| \[d̦\] | d | d | Alb cu chenar negru |  |  |

| Tabel 2   |  |  |  |
| :---- | :---- | :---- | :---- |
| UA fonemic vocalic EiC |  Grafem | Transformare EiC Culoare-atribut pe care îl are și îl aplcă oricărui care îi corespunde | Exemple engleză |
| **/æ**/  | a, ai, au, ea, ei, i, o | Albastru deschis (\#00b0f0) | **a**pple, c**a**t |
| /ʌ/  | u, o, oe, oo, ou, u, wo, a, au ee | Gradient: Verde închis (\#008E40) 70% → Negru 30% | s**o**n, c**u**p |
| /**a, ɑː**/  | a, au, i, o, aa, aae | Verde închis (\#008E40) | c**a**r, f**a**ther |
| /**ə**/ | a, e, i, o, u, y, , ae, ai, au, ea, eau, ei, eo, eou, eu, ia, ie, io, iou, oa, oe, oi, oo, ou, u, ua, ue, ui, uo,  | Negru (\#000000) | about, taken |
| /**e,** **ɛ**/ | e, a, ae, ai, ay, ea, ei, eo, ie, oe, ue, ee  | Portocaliu (\#EE5B00) | b**e**d, h**ea**d |
| /**ɪ**/ | i, y, a, ai, e, ea, ee, ei, ia, ie, ii, o, oe, u, ui | Gradient: Roșu (\#CC0000) 70% → Negru 30% | s**i**t, t**i**p |
| \[**i:, i**\] | e, i, a, ae, aoi, ay, ea, ee, e'e, ei, eo, ey, eye, ie, oe, oi, ue, ui, uy, y | Roșu (\#CC0000) | s**ee**, m**ea**n |
| \[**ɒ, ɔ**\] | o, au, eau, ou, ow, e, eo, aw, ea, awe, a | Gradient: Roz (\#FF3399) 70% → Negru 30% | h**o**t, wh**a**t, l**aw**n, c**au**ght |
| \[o\] | au, aw, oo, oa, o, ou owa, uo, a | Roz (\#FF3399) | D**oo**r, f**o**rce |
| \[**ʊ**\] | oo, u, o, ou, w | Gradient: Violet (\#7030A0) 70% → Negru 30% | put, book |
| \[**u**\] | u, oo, eew, eu, ew, ieu, iou, o, oe, oeu, ooe, ou, ou, ue, u, ui, uo, w, wo | Violet (\#7030A0) | food, room |
|  |  |  |  |
| \[ə **ʊ**\] | o,  ao, au, au, eau, eaue, eo, ew, oa, oe, o, oo, ou, ow, w | Gradient: \#002B7F → \#FCD116 → \#CE1126 | go, snow |
| \[**a** **ɪ**\] | i, e, ae, ai, aie, ay, aye, ei, eu, ey, eye, ia, ie, oi, oy, ui, uy, uye, y, y, ye | Albastru mediu (\#4472C4) | time, my |
| \[e ɪ\] | a, aa, ae, ai, ao, au, ay, aye, e, eé, ea, ee, ée, ei, ey, eye, ie, oe, ue,  | Albastru închis (\#00246C) | name, day |
| \[a ʊ\] | ou, ow, ao, aou, aow, aowe, au, o, ou, iao, iau | Verde neon (\#23D300) |  |
| \[ɔ \+ ɪ\] | oi, oy oi, oy, eu, ooi, oye, ui, uoy, uoye, awy | Gradient: o \- Roz (\#FF3399) → ỷ \- Roșu (\#CC0000) | boỷ, coỉn |
| \[ju:\] | u, ew, eau, eo, eu, ewe, eu, ue, ueue, ui, uu,  | Maro (\#833C0B) | cute, beauty |
|  |  |  |  |
| \[wʌ\]  | o | Tradient: negru –galben-negru |  |
|  |  |  |  |
| \\ing\\ |  /iŋ/ /iŋg/ | i – roșu, ng \- negru |  |
| \\ ous \\ 	if ous, then ous=/əs/ | /əs/ |  |  |
| /wa/ | oi o, if first /wa/,  then / /aɪ/ |  | Choir /wa/ are prioritate in fața lui /aɪ/ pentru că /w/ e înaintea lui w.  |

