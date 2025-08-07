// Sample artwork data
const artworks = [
    {
        id: '1',
        title: {
            pt: 'Sonhos Urbanos',
            en: 'Urban Dreams'
        },
        imageUrl: 'src/kaique(8).jpg',
        poem: {
            pt: `Você tem destinado espaço no seu imaginario a quê?
Digo, no que que você tem pensado?
Como anda o campo das ideias?
Eu faço perguntas demais?
Quando você lê você ignora as onomatopeias?
O que você esconde debaixo da ponte do ser?
O que que você guarda do outro lado do espelho?
Olha no meu olho. 
A gente tem tudo a ver!
Por isso que eu quero saber.
O que é que tem esgotado suas energias?
Me diz o nome do motivo.
Saudades é o plural de nostalgia.
Que altura tem teu riso favorito?
Eu quero provar disso que tu pensa entender o que te faz você. 
Eu tenho me preocupado na forma com que me aconteço.
Eu me apreço pra não te perder.
É que se eu moscar o bonde passa.
O tempo voa e eu não tenho asas.
Se eu parar ele me atropela.
Se eu olhar ele disfarça. 
Eu tenho pensado nisso.
Eu fico pintando devaneios pra ver se eles acontecem. 
Pra ver se eu acho uma falha, um abismo, uma traça.
Algo que comprometa esse teatro armado.
Algo que mostre o fogo que trás essa fumaça. `,
            en: `What have you made space for in your imagination?
I mean, what have you been thinking about?
How’s the field of your ideas doing?
Do I ask too many questions?
When you read, do you ignore the onomatopoeias?
What do you hide beneath the bridge of being?
What do you keep on the other side of the mirror?
Look into my eyes.
We’ve got everything in common!
That’s why I want to know.
What’s been draining your energy?
Tell me the name of the reason.
“Saudades” is the plural of nostalgia.
How tall is your favorite laugh?
I want to taste what you think helps you understand what makes you you.
I’ve been worried about the way I happen to myself.
I hurry, afraid of losing you.
It’s just that if I space out, the train passes.
Time flies and I don’t have wings.
If I stop, it runs me over.
If I look at it, it pretends not to notice.
I’ve been thinking about that.
I keep painting daydreams to see if they come true.
To see if I can find a flaw, an abyss, a moth.
Something that compromises this staged play.
Something that reveals the fire behind this smoke.`
        },
        createdAt: '2024-08-01'
    },
    {
        id: '2',
        title: {
            pt: 'Natureza Selvagem',
            en: 'Wild Nature'
        },
        imageUrl: 'src/kaique(2).jpg',
        poem: {
            pt: `Sei quem eu sou e não sei o bastante
Sei quem não sou e não sei de verdade
Saber que posso ser mais do que sou e também que não tem porque ter pressa com tão pouca idade

Mas temer
Temer que os sonhos diminuam com o tempo que nem minha força de vontade
São 18 anos batendo na porta e pra quem tem 25 é pouco pra quem tem 60 é quase nada
Mas pra quem tem 18 e muitos sonhos é a pressão de conhecer o próprio potencial e sentir que estancou no começo da caminhada
Sentir que não foi doido na adolescência e agora já passou da fase de endoidecer
Ou sentir que foi doido de mais e já passou da hora de amadurecer
Sentir que tem muito ainda a ser feito, mas não saber onde, quando e por que?
Saber o que quer mas duvidar
Saber o que não quer é mesmo assim se sujeitar

Não sei
Só queria ter 18 anos para sempre e nada além disso.`,
            en: `I know who I am, and yet I don’t know enough
I know who I’m not, and yet not truly
I know I can be more than I am, and still, there’s no reason to rush at such a young age

But I fear
I fear that dreams might shrink over time, like my willpower
I’m turning 18—
To someone who’s 25, it’s nothing
To someone who’s 60, it’s even less
But to someone who’s 18 with too many dreams, it’s the pressure of knowing your own potential and feeling stuck at the very start of the journey

Feeling like you weren’t wild enough as a teenager, and now it’s too late to go crazy
Or feeling like you were too wild, and now it’s time to grow up
Feeling like there’s still so much left to do, but not knowing where, when, or why
Knowing what you want, but doubting
Knowing what you don’t want, and still putting up with it

I don’t know
I just wish I could be 18 forever, and nothing more.`
        },
        createdAt: '2024-07-28'
    },
    {
        id: '3',
        title: {
            pt: 'Reflexos da Alma',
            en: 'Soul Reflections'
        },
        imageUrl: 'src/kaique(3).jpg',
        poem: {
            pt: `Existem coisas que acontecem sem nenhum objetivo.
Eu não tenho medo de ir pro inferno, ele já é aqui.
Eu não quero ir pro seu pelo mesmo motivo.
Você me garante que o segredo de tudo está em livro que eu te garanto que esse livro está em uma biblioteca de acesso provativo por debaixo de átrios e ventrílocos.
Trancado a sete chaver no mesmo lugar onde se bombeia sangue magua e risos.
Eu sei como se sente mano, Eu sempre me sinto perdido.
É preciso descansar em uma sombra pra relembrar o caminho.
Por que o sol quente que te bronzeia também produz miragens.
E É facil acreditar no que se vé quando está com sede.
Eu vim de um lugar onde se aceita um copo de agua de um desconhecido.
E hoje tem que sair de fora quando isso te surpreende.
Saudade do tempo onde se confiava nas pessoas.
O que seria do coração senão o aumentativo de couraça
É tempo de culpar as praças.
To tentando ter coragem pra não morrer atoa.
Eu escrevo correndo por que o tempo voa.
Um voo que normalmente ninguem assiste a decolagem.
E o piloto falou que não vai aterricar só de sacanagem.
Resumindo. A gente mau nasce e já começa a morrer.
Por isso é preciso haver memoria.
Inimigo é aquele que atenta contra sua propria historia.
`,
            en: `There are things that happen without any purpose.
I’m not afraid of going to hell — it’s already here.
And I don’t want to go to your heaven, for the same reason.
You tell me the secret of everything is in a book, and I’ll tell you that book is hidden in a restricted-access library, buried beneath atriums and ventriloquists.
Locked away with seven keys, in the same place where blood, magic, and laughter are pumped.
I know how you feel, man — I always feel lost.
You need to rest in the shade to remember the way.
Because the hot sun that tans you also creates mirages.
And it’s easy to believe in what you see when you’re thirsty.
I come from a place where we accept a glass of water from a stranger.
And today, we’re shocked when that still happens.
I miss the time when people could be trusted.
What is a heart, if not an armor made bigger?
Now is the time to blame the squares.
I’m trying to find the courage not to die in vain.
I write in a rush because time flies.
A flight no one usually watches take off.
And the pilot said he won’t land it — just for fun.
In short: we barely start living and we’re already dying.
That’s why memory must exist.
An enemy is someone who disrespects their own story.`
        },
        createdAt: '2024-07-25'
    },
    {
        id: '4',
        title: {
            pt: 'Melodia Visual',
            en: 'Visual Melody'
        },
        imageUrl: 'src/kaique(4).jpg',
        poem: {
            pt: `Eu não sei o que te faz sofrer
Algo parecido com o que eu sofria
Eu demorei pra saber, eu sei que você sabia.
aconteceu comigo numa sexta feira.
foi primeira vez eu vi o seu da noite virar dia.
todo mundo viu e quem não viu percebia.
todo mundo reconhece um poeta.
mais ninguem sabe como faz poesia.
Quem fala que sabe finge muito bem.
E quem vive fingindo se atrapalha algum dia.
Poesia também é um ato falho, um fragrante, uma estripolia.
Como faz eu não sei. 
Não me pergunte o que eu não te perguntaria.
Cada covarde com a sua covardia.
Por que coragem eu tenho.
No maximo uma vez por dia.
E ter coragem uma vez por dia é coisa pra cacete eu diria.
Eu escrevi esse texto todo só pra te perguntar.
que tragedia é essa que te fez escrever poesia.

`,
            en: `I don’t know what makes you suffer
Maybe something like what I used to feel
It took me a while to understand, but I know you already knew
It happened to me on a Friday night
It was the first time I saw your night turn into day
Everyone saw it — and those who didn’t, felt it
Everyone can recognize a poet
But no one really knows how to make poetry
Those who say they do are just good at pretending
And those who live pretending will stumble eventually
Poetry is also a slip, a reveal, a wild little trick
How it’s done — I don’t know
Don’t ask me what I wouldn’t ask you
Each coward with their own kind of cowardice
Because me — I have courage
At most, once a day
And having courage once a day — that’s a hell of a thing, I’d say
I wrote this whole piece just to ask you one thing:
What kind of tragedy made you start writing poetry?`
        },
        createdAt: '2024-07-20'
    },
    {
        id: '5',
        title: {
            pt: 'Portal Místico',
            en: 'Mystic Portal'
        },
        imageUrl: 'src/kaique(5).jpg',
        poem: {
            pt: `Eu tenho um mal pressentimento, uma impressão.
De que se eu vicitasse o centro de um buraco negro eu encontraria você lá.
É estranho o sentimento.
Eu tenho a sensação de que é como se vc soubesse de tudo, dissesse tudo, sem precisar falar.
A confirmação sempre mora sorriso mas a duvida sempre visita nosso olhar.
Uma dica pra enfrentar os seus contextos.

Se for pra ter certeza bata no peito e não arreda perante nenhum pretexto.
A gente combina com nossos gestos.
A gente reclama dos nossos medos.
É fácil abandonar anéis mas é difícil acostumar os dedos.

Eu tenho um mal pressentimento, uma impressão. 
De que a vida foi feita pra ser contrariada mas os nossos extintos não.
Eu busco em aventuras a sensação de ser uma.
Assista a valsa do alívio com a culpa.
É pesado e ao mesmo tempo pluma.

Eu já gastei todo o meu vocabulário e não expliquei o mostro que eu criei.
Esse espantalho tem até CPF.
Aprendeu palavrões que eu ensinei.
Eu já fiz demônios darem risada.
Encontro com faltasmas toda vez que levanto para tomar água.
Nada me assusta mais do que dormi com mágua.

Para meus leitores e ouvintes, desculpe a confusão.
Estou em manutenção.
Eu tenho um mal pressentimento, uma impressão. 

`,
            en: `I have a bad feeling, a hunch.
That if I visited the center of a black hole, I’d find you there.
It’s a strange feeling.
I get the sense that it’s like you know everything, say everything, without speaking a word.
The answer always lives in the smile, but doubt always visits our eyes.
Here’s a tip for facing your own storms:

If you want certainty, beat your chest and don’t back down for any excuse.
We match our gestures.
We complain about our fears.
It’s easy to let go of rings, but hard to get used to bare fingers.

I have a bad feeling, a hunch.
That life was made to be contradicted — but not our instincts.
I search through adventures for the feeling of being one.
Watch the waltz of relief and guilt.
It’s heavy, and yet it floats like a feather.

I’ve used up all my vocabulary, and still couldn’t explain the monster I created.
This scarecrow even has a tax ID.
It learned all the curses I taught it.
I’ve made demons laugh before.
I meet ghosts every time I get up for a glass of water.
But nothing scares me more than sleeping with resentment.

To my readers and listeners, forgive the confusion.
I’m under maintenance.
I have a bad feeling, a hunch.`
        },
        createdAt: '2024-07-15'
    },
    {
        id: '6',
        title: {
            pt: 'Oceano de Sentimentos',
            en: 'Ocean of Feelings'
        },
        imageUrl: 'src/kaique(6).jpg',
        poem: {
            pt: `
Eu queria saber por que a maioria das coisas que desejamos
Que parece belo. Que preenche a fome. É invisivel.

Talvez o amor platônico explique
Talvez seja um transtorno.
Eu tento evitar mais é quase impossível.

Fantasiar momentos ridiculos e inexecutáveis.
Tomar quase qualquer pausa e qualquer brecha.
É minha causa. A porta que abre é a mesma que fecha.

Eu não sei até que ponto isso diz sobre saúde mental.
Vi de tudo. 
Tudo que passamos.

Alucinar fantasias nos momentos cabiveis parece terapêutico.
Ou fuga. 
Antes que isso tudo me consuma.

Eu achei que meus primeiros textos eu estivesse numa jornada pra entender tudo isso.
Eu já perdi as contas das vezes que escrevi pra mim mesmo.
Eu sei. Eu sou omisso.

Talvez eu estejá fadado a oscilar dentro desse indescritível.
98% da massa do universo. O amor. a Saudade.
Tudo que há de mais importante é invisivel.`,
            en: `I wonder why most of the things we long for
The things that seem beautiful, that feed the hunger — are invisible.

Maybe platonic love explains it
Maybe it’s a disorder.
I try to avoid it, but it’s almost impossible.

To fantasize about ridiculous, impossible moments.
To take almost any pause, any gap in time...
That’s my cause.
The same door that opens is the one that shuts.

I don’t know how much of this speaks about mental health.
I’ve seen it all.
Everything we’ve been through.

Hallucinating dreams in the right moments feels like therapy.
Or an escape.
Before all of this consumes me.

I thought that in my first writings, I was on a journey to understand it all.
I’ve lost count of how many times I’ve written to myself.
I know. I hold back.

Maybe I’m doomed to drift inside this indescribable thing.
98% of the universe’s mass — love, longing...
Everything that truly matters is invisible.`
        },
        createdAt: '2024-07-10'
    },
    {
        id: '7',
        title: {
            pt: 'Verdades Ocultas',
            en: 'Hidden Truths'
        },
        imageUrl: 'src/kaique(7).jpg',
        poem: {
            pt: `
E eu tô distante da verdade crua, pura
E quanto mais fico a procura, pra mais longe ela pula
Mente burra me prendendo no meu próprio dilema
Meu problema foi achar que essa verdade me cura

Amor eu devo ser um ser antigo
Pois sinto que já vivi tudo isso daqui
Mais de uma vez contigo
Têm estradas que construí mas não sigo
Pois sei bem onde dá
E eu não gostei do próprio castigo

Criamos muros e fronteiras.
Buracos e trincheiras.
Pra não ver que o outro comete erros à nossa maneira
Somos iguais e odiamos nossa semelhança.
A diferença fez a gente construir barreiras

Ignorância sobre a mesa
O banquete tá posto e o imposto é ódio
E ainda vem de sobremesa

A vida é um presente embrulhado
Que eu não recomendo abrir
Porque tu sabe o que tem dentro
Morte não é surpresa

As vezes sonho que depois da vida eu tô num tribunal
Meus erros são promotores e eu não tenho defesa
Na mesa tem uma balança onde minha mente pesa
Minha raiva cresce até o ponto que rompe minha represa

Beleza, daí pra frente fica um pouco turvo
Vejo o mundo pelos olhos do corvo
Entre bem e mal não sei pra qual eu torço
Pois o cidadão de bem mata mais que um fuzil semi-novo

E quem me dera eu fosse eloquente
Fizesse perguntas e avistasse respostas a frente
Pois se fosse o caso eu escreveria diferente
Se eu perguntasse menos incomodaria muito menos gente

E se eu perguntasse menos saberia menos ao menos
Dizem que burrice é bênção atualmente
Eu não me ajoelho facilmente
2 anos então concordamos que eu não vivo abençoadamente

Brigo com Deus diariamente
Pois ele criou o mundo
E espalhou um pensamento doente
De que o mundo nos pertence e que fazemos tudo o que queremos
Não é à toa que a humanidade não anda pra frente

Preconceito virou hobby de playboy
Que não assume que erra porque a consciência dói
Permanece no erro indiferente
Pois o pai proíbe que ele use a mente
Com medo de criar um rebelde

Padrões de antigamente fedem
Recomendo que cês desistam das ideias que me pedem
Quem com ferro fere com ferro será ferido
Não sou mais comovido com o choro no rosto, que me ferem

Sou um hipócrita que comete pecados em versos
Sempre que me expresso agrado alguns e incomodo o resto
Trago frases de efeito
que não me surtem efeito
Pois sou louco de um jeito
Que num cabe no verso

Minha mãe me disse para eu parar de ser inocente
Não acreditar em gente
Pois o ser humano mente
Mata por dinheiro pra comprar o que não se vende
E no fundo tanto fez tanto faz porque o racional não sente
É difícil discordar desse argumento
Eu abro a janela de casa e vejo raiva e sofrimento
Preconceito, intolerância, discriminação, arrogância
Ostentação, prepotência e muito julgamento

Vejo discórdia e miséria, petróleo e guerra
Pessoas protestando por suas terras
Protestantes protegendo ideais separatistas
E artistas se importando muito mais com dinheiro do que com ideia
Não sei se nós tá na terra ou no inferno
Nem se no fundo essa pergunta ainda importa
Porque o anticristo já bateu na minha porta

Me ofereceu muito dinheiro vivo
Em troca de muita gente morta
Cansei de ser passivo na mudança
Quero trazer mudança enquanto ainda tô vivo
Não quero que nossos filhos tenham nossos medos
Por isso meu trabalho transmite esperança
Acredito que mudar ainda é o verbo certo
Acredito que a mudança tá no livro aberto
Acredito que o governo não quer a mudança
Por isso o país ainda tem tanto analfabeto

O caos rodeia
Sei que tu anseia
Volta pra ter amor
O perdão se foi
Veja como dói
Deixei pra depois e o tempo passou.`,
            en: `And I’m far from the raw, pure truth
And the more I search, the further it jumps away
A dumb mind trapping me in my own dilemma
My mistake was thinking this truth would heal me

Love, I must be an ancient being
Because I feel I’ve lived all this before
More than once with you
There are roads I built but don’t follow
Because I know well where they lead
And I didn’t like my own punishment

We build walls and borders.
Holes and trenches.
To avoid seeing that others make mistakes just like us
We’re the same and we hate our similarity.
Difference made us build barriers

Ignorance on the table
The feast is set, and the tax is hate
And there’s even dessert

Life is a wrapped gift
That I don’t recommend opening
Because you know what’s inside
Death is no surprise

Sometimes I dream that after life I’m in a courtroom
My mistakes are prosecutors, and I have no defense
On the table is a scale where my mind weighs
My anger grows until it breaks my dam

Alright, from here it gets blurry
I see the world through the crow’s eyes
Between good and evil, I don’t know which I root for
Because the “good citizen” kills more than a semi-new rifle

And I wish I were eloquent
Asking questions and seeing answers ahead
If that were the case, I’d write differently
If I asked less, I’d bother a lot fewer people

And if I asked less, I’d at least know less
They say stupidity is a blessing these days
I don’t kneel easily
Two years in, so we agree I don’t live blessed

I fight with God daily
Because He created the world
And spread a sick thought
That the world belongs to us and we can do whatever we want
No wonder humanity doesn’t move forward

Prejudice turned into a rich kid’s hobby
Who doesn’t admit mistakes because conscience hurts
Stays wrong and indifferent
Because the father forbids him to use his mind
Afraid he’ll raise a rebel

Old standards stink
I recommend you give up on the ideas you ask me for
Whoever wounds with iron will be wounded by iron
I’m no longer moved by tears on faces that hurt me

I’m a hypocrite committing sins in verses
Whenever I express myself I please some and bother the rest
I bring catchy phrases
That don’t affect me
Because I’m crazy in a way
That doesn’t fit in a verse

My mother told me to stop being innocent
Not to trust people
Because humans lie
Kill for money to buy what can’t be sold
And deep down it all makes no difference, because the rational doesn’t feel
It’s hard to disagree with that argument
I open my window and see anger and suffering
Prejudice, intolerance, discrimination, arrogance
Ostentation, arrogance, and much judgment

I see discord and misery, oil and war
People protesting for their lands
Protestants protecting separatist ideals
And artists caring way more about money than ideas
I don’t know if we’re on earth or in hell
Or if deep down this question even matters
Because the antichrist already knocked on my door

He offered me a lot of living money
In exchange for many dead people
I’m tired of being passive in change
I want to bring change while I’m still alive
I don’t want our children to have our fears
That’s why my work spreads hope
I believe changing is still the right verb
I believe change is in the open book
I believe the government doesn’t want change
That’s why the country still has so many illiterates

Chaos surrounds
I know you long
Come back to love
Forgiveness is gone
See how it hurts
I left it for later and time passed.`
        },
        createdAt: '2024-07-10'
    },
    {
        id: '8',
        title: {
            pt: 'Caminhos da Vida',
            en: 'Paths of Life'
        },
        imageUrl: 'src/kaique(9).jpg',
        poem: {
            pt: `Vivendo nesses mistérios em busca de encontrar 
Algum abraço confortavel aonde eu possa descansar
Falar de amor as vezes cansa. É que falar não é amar.
Talvez sentir um pouco mais, possa me libertar.
Tenho angústias que em mim não passam, tento me acostumar.
E a cada ano de vida passado, uma nova história pra contar.
Queremos tanto nós sentir parte de algo.
Pra que la no fundo acretitemos que nascemos pra bem mais.
Estranho seria se aqui ninguém corresse atras de paz.
Bom, por acaso você ja chorou hoje?
Talvez faça bem chorar.
Ir até um local de paz, e desabar.
Em busca de algo que não sei o nome eu ja pensei em parar.
Mas pensar em desitir não é o problema, o problema é não pensar em voltar.
É que agora pra mim a exposição não interessa eu quero apenas ser feliz.
Das minhas dores cuido eu, expostas como cicatriz.
Não me revelo a ninguém mas por medo do que vão dizer.
Quem me ve não me conhece é que eu prefiro me esconder.
E se eu mostrasse quem sou de verdade muitos iriam rir. poucos iriam entender.
Por isso que eu faço poesia só assim pra mim sobreviver.
Então essa é minha verdade que eu dou de bandeja pra vocês.
E pra mim amar e ser amado é o mais importante e a cada palavra eu fico a pensar.
Falar de amor não é cansativo, cansativo é esperar o amor chegar.`,
            en: `Living in these mysteries, searching to find
Some comforting hug where I can rest
Talking about love can be tiring sometimes — because talking isn’t loving
Maybe feeling a little more can set me free
I have anguish that doesn’t leave me, I try to get used to it
And with every year of life that passes, a new story to tell
We want so much to feel part of something
So deep inside we believe we were born for much more
It would be strange if no one here chased peace
By the way, have you cried today?
Maybe crying does good
Going to a peaceful place, and breaking down
In search of something whose name I don’t know — I’ve thought about giving up
But thinking about giving up isn’t the problem, the problem is not thinking about coming back
Now, exposure doesn’t interest me — I just want to be happy
I take care of my pain myself, exposed like a scar
I don’t reveal myself to anyone, out of fear of what they’ll say
Who sees me doesn’t know me — I prefer to hide
And if I showed who I really am, many would laugh, few would understand
That’s why I write poetry — only this way I survive
So this is my truth, handed to you on a silver platter
And for me, loving and being loved is the most important thing, and with every word I keep thinking:
Talking about love isn’t tiring — what’s tiring is waiting for love to arrive.`},
        createdAt: '2024-07-05'
    },
    {
        id: '9',
        title: {
            pt: 'Horizontes Inexplorados',
            en: 'Unexplored Horizons'
        },
        imageUrl: 'src/kaique(10).jpg',
        poem: {
            pt: `As coisas começaram a dar errado quando eu misturei as blusas e as camisetas no guarda roupa. 
É complicado.
Pra resumir não que eu vá parar por aqui.
Mais já virou mania errar o time.

No fim das contas só vou te destrair pra não justificar o quanto que sou metodico.
Gosto quando me elogiam é logico.
A vida é sleckline.

Ok, isso é um texto sobre defeitos.
Quando eles são observador eles se comportam diferente.
A gente não concorda mas sente.
Eu me comprometo a não estender essa conversa, quanta groselha cabe numa frase dessa gente?

Essa desorganização vem do fundo da alma.
Parece até que eu gosto de bagunçar a minha mente.
Talvez seja só auto sabotagem, ansiedade e miragem.
você que me convença do diferente.

Eu tenho mania de não confiar no que eu digo.
Nariz empinado esconde:medo, raiva e pai ausente.
Fechei o corpo, Enchi o peito, abri a mente.`,
            en: `Things started going wrong when I mixed the sweaters and t-shirts in the closet.
It’s complicated.
To sum up — it’s not like I’m going to stop here.
But I’ve already made a habit of picking the wrong team.

In the end, I’ll just distract you so I don’t have to justify how methodical I am.
I like it when people compliment me — obviously.
Life is a sleekline.

Ok, this is a text about flaws.
When they’re being watched, they behave differently.
We don’t agree, but we feel it.
I promise not to drag this conversation out — how much nonsense can fit in a sentence, huh?

This disorganization comes from the depths of the soul.
It almost seems like I like messing up my mind.
Maybe it’s just self-sabotage, anxiety, and mirage.
You convince me otherwise.

I have this habit of not trusting what I say.
A stuck-up nose hides: fear, anger, and an absent father.
I closed my body, filled my chest, opened my mind.`
        },
        createdAt: '2024-07-01'
    },
    {
        id: '11',
        title: {
            pt: 'Cores da Emoção',
            en: 'Colors of Emotion'
        },
        imageUrl: 'src/0(16).webp',
        poem: {
            pt: `Você tem uma fama dentro das minhas paredes.
Desde que eu fui para o norte e você foi para o sul.
A galera do meu quarto só fala de tu.
O meu sofa tem reclamado "Por onde anda aquela maluca que joga a mochila em mim".
O banquinho que você esticava a perna prefiriu ficar calado.
Mas eu entendo. Ele é assim.
O meu armario reclama sempre do silêncio e do meu excesso de planos.
Sem você a gente escuta água pelos canos.
O braço da minha cama sente falta da sua jaqueta.
E o meu espelho adorava o tempo que você parava pra se olhar.
Tem sobrado espaço e parado o ar.
Lembra do meu caderninho de rascunho.
Ele ainda está com saudade do seu rabisco.
Enjoou do meu traço e eu confeço não sou tão bom nisso.
Eu sou bom em sentir sua falta.
Assim que escrevi isso.
Menina famosa, vê se aparece, volta do sul.
A galera do meu quarto só fala de tu.`,
            en: `You’ve got a reputation inside my walls.
Você tem uma fama dentro das minhas paredes.
Ever since I went north and you went south.
Desde que eu fui para o norte e você foi para o sul.
The folks in my room only talk about you.
A galera do meu quarto só fala de tu.
My couch has been complaining, “Where’s that crazy girl who used to toss her backpack on me?”
O meu sofá tem reclamado: “Por onde anda aquela maluca que joga a mochila em mim?”
The little stool you used to stretch your legs on chose to stay silent.
O banquinho que você esticava a perna preferiu ficar calado.
But I get it. That’s just how he is.
Mas eu entendo. Ele é assim.
My wardrobe keeps complaining about the silence and my endless plans.
O meu armário reclama sempre do silêncio e do meu excesso de planos.
Without you, we can hear the water in the pipes.
Sem você a gente escuta água pelos canos.
The side of my bed misses your jacket.
O braço da minha cama sente falta da sua jaqueta.
And my mirror loved the time you used to spend looking at yourself.
E o meu espelho adorava o tempo que você parava pra se olhar.
Now there’s leftover space and the air feels still.
Tem sobrado espaço e parado o ar.
Remember my little sketchbook?
Lembra do meu caderninho de rascunho?
It still misses your doodles.
Ele ainda está com saudade do seu rabisco.
It got tired of my drawings, and I admit—I’m not that good at it.
Enjoou do meu traço e eu confesso: não sou tão bom nisso.
But I’m good at missing you.
Eu sou bom em sentir sua falta.
That’s how I wrote this.
Assim que escrevi isso.
Famous girl, show up sometime, come back from the south.
Menina famosa, vê se aparece, volta do sul.
The folks in my room still only talk about you.
A galera do meu quarto só fala de tu.`
        },
        createdAt: '2024-06-25'
    },
    {
        id: '13',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(13).jpg',
        poem: {
            pt: `Lembro me dos seus sorrisos que me bagunçavam.
Recordo-me de pessoas tentando enfraquecer nosso amor.
Fracassavam.
Há como eu me lembro do dia em que fizemos um piquinique.
Você tava tão linda e levou uma vitamina de morando do jeitinho que eu gostava.
Eu lembro quando você chegava em casa cansada.
Eu cozinhava algo pra você comer, tomavamos banho e assistimos série até da voltade de dormir.
Eu lembro de você olhando nos meus olhos dizendo que não teria fim.
Eu lembro da primeira vez que jantei na casa dos seus pais.
Seu pai me olhou meio torto quando eu disse que queria viver de arte. Mas tranquilo. Todo mundo me olha assim.
Eu lembro da gente andando de mão dadas na praia.
Eu lembro do tanto que você chorou quando eu te dei uma aliança.
E é uma pena. mas eu não posso ter o prazer de lembrar dessas coisas.
Nada disso aconteceu. São só devaneios que eu criei na minha cabeça numa tarde de domingo deitado na cama.
Se você meu caro leitor e ouvinte se identificou. Eu lamento.
Dessa dor eu entendo bem.
Eu notei que o mundo tinha desistido de colocar obstaculos pra te amar. da pra crê?
Insatisfeito ele encontrou o unico que me impediria. Você!`,
            en: `I remember your smiles that used to mess me up.
I recall people trying to weaken our love.
They failed.
Oh, how I remember the day we had a picnic.
You looked so beautiful and brought a strawberry smoothie just the way I liked it.
I remember when you came home tired.
I’d cook something for you to eat, we’d take a shower, and watch a series until we felt like sleeping.
I remember you looking into my eyes saying it would never end.
I remember the first time I had dinner at your parents’ house.
Your dad gave me a sideways look when I said I wanted to live from art. But it’s okay. Everyone looks at me like that.
I remember us walking hand in hand on the beach.
I remember how much you cried when I gave you a ring.
And it’s a shame — but I can’t enjoy remembering these things.
None of it happened. They’re just daydreams I created in my head on a Sunday afternoon lying in bed.
If you, my dear reader or listener, identify with this — I’m sorry.
I understand this pain well.
I noticed the world had given up on putting obstacles in the way of loving you. Can you believe it?
Dissatisfied, it found the one who would stop me. You!`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '11',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(14).jpg',
        poem: {
            pt: `Bom, não que eu tenha que explicar o porquê tô tanto tempo

sem postar.

Mais como eu não tenho nada melhor pra fazer.

Me sobra agradecer a meia dúzia que perguntou e tentar descrever o porquê que o meu nascer, diz tanto sobre perpétua.

E que pessimistas vivem mais e eu posso provar.

Daquela água eu não bebi.

Quem bebeu também tá aqui mais é melhor previnir do que remediar.

Se me servir um café, não espere que eu seja o primeiro a levar a boca.

Não leve a mau minha cautela.

É que seu tabaco me preocupa, sua voz, tá maior roça.

Eu não penso pra atravessar a rua.

Eu faço uma filosofia.

Todo um projeto, um plano discreto que me guia.

Se só depender de mim a noite vira dia.

E me desculpa, que caso não der certo eu faço umas pulseira.

Eu vivo de poesia.

Eu sei é perigoso nesse tal mundo perdido.

Se meu plano da errado tudo acaba em ventania.

Mas o vento sopra forte.

E se por desafouro o telhado não aguenta.

Eu tomo prejuizo e preocupo a maioria.

Eu vou parar com isso, mas já tem trinco nesse teto.

Eu tiro o meu da reta e se pá vou pra padaria.`,
            en: `Well, it’s not like I have to explain why I’ve been gone so long
Without posting.
But since I have nothing better to do,
I want to thank the handful who asked and try to explain why my birth says so much about perpetual.

And that pessimists live longer — and I can prove it.

I didn’t drink that water.
Those who did are still here, but better safe than sorry.

If you serve me a coffee, don’t expect me to be the first to take a sip.
Don’t take my caution the wrong way.
It’s that your tobacco worries me, your voice sounds like a big field.

I don’t think just to cross the street.
I make a philosophy.
A whole project, a discreet plan that guides me.

If it’s only up to me, night turns into day.
And sorry, if it doesn’t work, I’ll make some bracelets.

I live on poetry.
I know it’s dangerous in this so-called lost world.

If my plan fails, everything ends in a gust of wind.
But the wind blows strong.

And if by chance the roof can’t hold,
I take the loss and worry most people.

I’m going to stop with this, but there’s already a latch on this roof.
I get myself out of trouble and maybe I’ll go to the bakery.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '11',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(15).jpg',
        poem: {
            pt: `Na minha opinião, a vida é majoritariamente feita de pesadelos e o intervalo entre eles.
Eu não sei vocês, mas eu tenho uma eterna sensação de suspense.
Como se o inédito fosse impossivelmente inevitável.
Como se o tédio fosse uma iguaria do presente.
Eu desisto um pouco na linha de raciocínio.
É que tem sido difícil escrever ultimamente.
A lógica tem me roubado muito tempo, me ausentando do meu canto criativo e perdi uma pessoa recentemente.
Voltando ao suspense, nosso calendário é recheado de tragédias.
Veja quais são as manchetes de maior destaque.
E por mais que isso tudo nos esmague, é só materialismo acontecendo na nossa frente.
Por isso, eu opto por ser racional.
Como se isso me blindasse ou parecesse, ou no mínimo
tentasse parecer mais resiliente.
Sendo bem honesto, sorrir é quase um luxo na vida da gente.
Mas respira fundo, se pagar pra vacilar, a vida engole o descrente.
No fim do dia, eu acabo me lembrando do suspense.
Às vezes, atrapalha um pouco o sono.
Viver é a arte de superar-se a cada instante.
É raro, mas às vezes a gente vence.
Acordar de pesadelos.
Ter o desapego dos amantes.
Esses dias eu ouvi: Viva como se nunca tivesse vivido antes.
Achei interessante.
Experimente.`,
            en: `In my opinion, life is mostly made of nightmares and the breaks between them.
I don’t know about you, but I have an eternal feeling of suspense.
As if the unexpected were impossibly inevitable.
As if boredom were a delicacy of the present.
I give up a little on the train of thought.
It’s just been hard to write lately.
Logic has been stealing a lot of my time, pulling me away from my creative corner, and I lost someone recently.
Back to suspense — our calendar is filled with tragedies.
Look at the headlines that stand out the most.
And even though all this crushes us, it’s just materialism happening right in front of us.
That’s why I choose to be rational.
As if that would shield me or at last
try to make me seem more resilient.
To be honest, smiling is almost a luxury in our lives.
But take a deep breath — if you slip up, life swallows the unbeliever.
At the end of the day, I end up remembering the suspense.
Sometimes it messes with my sleep a bit.
Living is the art of overcoming yourself at every moment.
It’s rare, but sometimes we win.
Wake up from nightmares.
Let go of lovers.
The other day I heard: Live as if you’ve never lived before.
I found it interesting.
Try it...`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '16',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(16).jpg',
        poem: {
            pt: `Haverá não,
O problema era bem maior do que a prospecção
Houve um dia que eu fugi 
Meu corpo caiu no chão
Não fazia sentido manter o equilíbrio
Bom, é o que eu achava
Quem viu de longe analisava Meu rosto refretia um vazio
Como quem via um fantasma
Eles voltaram
os mesmos que moravam no meu espelho
os que eu ignorei no primeiro contato
E não resolvi nem no terceiro.
eles deixam meu ombro pesado.
O peito não enche.
Dá desespero
Eu sei o que é ter medo.
Aquilo era invisível
Dois pés no freio. Travado.
Se eu tentar explicar eu choro.
Esse fim não justifica o meio.
Esse texto não é sobre mim.
Eu espero que entenda o receio.
A vida é assustadora em sua maior parte.
Via de regra violam seus direitos
Eu só queria ser feliz.
Pra não precisar mais esconder cicatrizes em sorrisos estreitos.
Pensar é um fardo pra quem ama demais.
Vamo mudar de assunto.
Me conte seus segredos?
Pra mim
Amor é Mãe
Saudade é Pai
Confiança é um ladrão
E amigos são dedos.`,
            en: `There won’t be
The problem was much bigger than prospecting
There was a day I ran away
My body hit the ground
It made no sense to keep balance
Well, that’s what I thought
From afar, those who saw analyzed me
My face reflected emptiness
Like someone seeing a ghost
They came back
The same ones who lived in my mirror
The ones I ignored the first time
And didn’t solve even by the third
They make my shoulder heavy
My chest won’t fill
It brings despair
I know what it is to be afraid
That was invisible
Two feet on the brake. Locked.
If I try to explain, I cry
This end does not justify the means
This text is not about me
I hope you understand the fear
Life is scary for the most part
Usually, they violate your rights
I just wanted to be happy
So I wouldn’t have to hide scars behind tight smiles
Thinking is a burden for those who love too much
Let’s change the subject
Tell me your secrets?
For me
Love is Mother
Longing is Father
Trust is a thief
And friends are fingers`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '17',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(17).jpg',
        poem: {
            pt: `Minhas palavras são cicatrizes que sumiram com esse caderno.
Minhas poesias são tentativas de não ir pro seu mais também
fugir do inferno.
Eu tô em busca do meio.
Saudade do colégio, alguém trás o meu remédio ou me tira desse tédio.
A figassidade da vida é como evaporar de um copo d'água
É lento mas eu sinto
Eu puxo uma cadeira e me sento.
Tomo um cole de absinto.
Brigas eu me abstenho num pensamento distinto
Daquela luz eu já vi, eu tive medo e corri.
Eu não olhei pro chão e cai.
Nos braços do intervalo entre o lá e o aqui.
Meu compromisso é dizer coisas fáceis de forma difícil.
Tipo, leia um livro eleve seu nível.
Um dramaturgo de verdade não tem paciência pra drama.
Tá tão quente aqui que eu descidi.
Hoje eu não saio da cama.`,
            en: `My words are scars that vanished with this notebook.
My poems are attempts not to go to your place, but also
to escape hell.
I’m searching for the middle ground.
I miss school, someone bring me my medicine or take me out of this boredom.
The stubbornness of life is like evaporating from a glass of water
It’s slow, but I feel it.
I pull up a chair and sit down.
I drink a glass of absinthe.
I abstain from fights in a different thought.
I’ve seen that light before, I was afraid and ran.
I didn’t look down and fell.
Into the arms of the gap between there and here.
My commitment is to say simple things in a difficult way.
Like, read a book, raise your level.
A true playwright has no patience for drama.
It’s so hot here that I’ve decided:
Today, I won’t get out of bed.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '18',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(18).jpg',
        poem: {
            pt: `Se vocês soubessem as dores que um poeta passa.
Poeta sente, sente tudo dobrado.
Poeta mente, cuidado!
Cuidados com a mente, cuidado com o trabalho.
- Seja mais delicado. deixe passar na frente.
É que a vida é um estalo e me assustou o som.
Como se fosse trauma, Como se existisse alma.
Por que que o chã mate é marrom?
Daqui pra frente a estratégia é essa, algo que roube a intenção.
Conectar o pé no chão, tracionar até sair faisca.
Distração.
Escrever é amar o inverno e ter saudade do verão.
Falta nostalgia que perpetua a insatisfação.
Viver para sempre é um erro e intender isso é loucura.
E falando da cura basta um coquetel e lavar a mão com sabão.
É que eu tenho... eu tenho sentido coisas que eu nem sei como
nomear.
"A descoberta do pânico".
Seria um nome de filme ou uma desorganização atômica?
Algo além do canônico.
O que se esconde nas cochias da vida?
Sacrificios, um caos antagonico?
Seria tragico se não fosse comico!
O meu alívio mora no vento que sopra o ipê na frente de casa.
Arrumar a postura e tomar um café só parte da rotina.
Preparativo pra uma hora bater as asas.
Afine seu instrumento.
Não espere pelo momento certo porque ele não vai esperar por ti.
Seja lá quem for esse cara só pode ser doente fruto do acaso
que decidiu e nos trouxe até aqui.
Viva a vida como se ela fosse de verdade e me desculpa por isso.
Não quero que passe por isso.
Então peço que não me chame de poeta, se não sera tarde.
Deixa eu ir que eu tenho compromisso.`,
            en: `If you only knew the pain a poet goes through.
A poet feels — feels everything twice as hard.
A poet lies — be careful!
Careful with the mind, careful with the work.
– Be more gentle. Let them go ahead.
Life is a snap, and the sound startled me.
As if it were trauma, as if a soul existed.
Why is chimarrão tea brown?
From now on, that’s the strategy: something that steals intention.
Connect your feet to the ground, push until it sparks.
Distraction.
Writing is loving winter and missing summer.
It lacks the kind of nostalgia that keeps dissatisfaction alive.
Living forever is a mistake — and realizing that is madness.
And speaking of the cure, all it takes is a cocktail and washing your hands with soap.
It’s just that I’ve been... I’ve been feeling things I don’t even know how to
name.
“The Discovery of Panic.”
Would that be the name of a movie or atomic disorganization?
Something beyond the canonical.
What hides in life’s backstage?
Sacrifices? An antagonistic chaos?
It would be tragic if it weren’t comical!
My relief lives in the wind that blows the golden trumpet tree in front of my house.
Fixing my posture and having a coffee — just part of the routine.
A preparation for the moment I finally spread my wings.
Tune your instrument.
Don’t wait for the right moment — it won’t wait for you.
Whoever this guy is, he must be insane — a freak of chance
that decided and brought us here.
Live life as if it were real — and I’m sorry for this.
I don’t want you to go through this.
So I ask — don’t call me a poet, or it’ll be too late.
Let me go — I have an appointment.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '19',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(19).jpg',
        poem: {
            pt: `Refletindo sobre cada espaço que ocupo e cada traço que desmente esse meu lado oculto.
tenho minhas dores e culpas, tanto que me culpo
de cometer aqueles erros de pensar no futuro.
Mas o futuro não é poblema, o poblema é tentar controlar coisas que são incontrolaves.
Vivendo no meu auge de ideias tão questionaveis.
E quando cai a fixa de que tudo é uma passagem, como a minha saudade ou minha felicidade, o sentimento ocila isso sim é de verdade.
São pontes indestrutiveis a fé e o amor.
É cre no que eu acredito e é paixão pra essa dor.
A solidão ontem me falou que quem ama não esquece
e eu amo essa tristeza por isso ela me percegue.
to dançando com o caos.
ta tudo tão normal.
meu reflexo no espelho diz que eu não sou ideal.
pra que ser o ideal? vou agradar a quem?
vivendo pelo meu eu me sinto muito bem.
Perdi meu mapa astral e meu astral nunca existiu.
Meu peito esta buscando um coração que ja partiu.
É tudo blá blá blá se eu não escrevo eu sufoco.
genuflexo diante dos seus olhos.
A vida é incerteza
Minhas cartas estão na mesa.
Quebrei meu coração mas to cuidando da cabeça.`,
            en: `Reflecting on every space I occupy and every trait that denies this hidden side of me.
I have my pains and guilt — so much that I blame myself
For making the mistake of thinking about the future.
But the future isn’t the problem, the problem is trying to control what can’t be controlled.
Living at my peak, with thoughts so questionable.

And when it hits me that everything is just a passage — like my longing or my happiness — the feeling wavers, and that is real.
Faith and love are indestructible bridges.
It’s believing in what I believe, and passion for this pain.

Loneliness told me yesterday that those who love don’t forget
And I love this sadness — that’s why it keeps chasing me.
I’m dancing with chaos.
Everything feels so normal.
My reflection in the mirror tells me I’m not ideal.
But why be ideal? To please who?
Living for myself, I feel just fine.

I lost my birth chart, and maybe my “star mood” never existed.
My chest is searching for a heart that already left.
It’s all blah blah blah — if I don’t write, I suffocate.
I kneel before your eyes.
Life is uncertainty.
My cards are on the table.
I broke my heart, but I’m taking care of my mind.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '20',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(20).jpg',
        poem: {
            pt: `Seu sorriso é terapia que eu não visito faz tempo.
Antes eu era louco pra ter uma mãe, hoje eu sou louco porque a perdi.
Gritei misericórdia aos mares a resposta foi um meremoto, ai eu percebi que alguma coisa mudou.
Amor sempre tentou ser um livro sobre minha vida, reciprocidade é um capítulo que destruido excluido, aí se eu pego esse leitor.
Logo eu me morava no seu abraço, hoje eu me sinto completamente sem teto.
Pra você, talvez eu fui só um fracasso.
Mais oque eu senti não é um boato.
Você passou como uma idéia, um hiato.
Na cabeça de um escritor.
Que não durou o tanto que eu gostaria, mais o pouco que ficou lê pareceu perfeita.
Sabe as vezes só queria ter sua receita.
Escrevo mais um texto sobre você chorando.
E de novo não é de felicidade.`,
            en: `Your smile is therapy I haven’t visited in a long time.
I used to be crazy to have a mother, now I’m crazy because I lost her.
I cried out for mercy to the seas — the answer was a tidal wave. That’s when I realized something had changed.
Love always tried to be a book about my life — but “reciprocity” was a chapter that got destroyed, deleted — oh, if I ever catch that reader.

I used to live in your embrace, now I feel completely homeless.
To you, maybe I was just a failure.
But what I felt is no rumor.
You passed through like an idea, a pause,
In the mind of a writer.

You didn’t last as long as I would’ve liked, but what remained of you — it felt perfect.
You know, sometimes I just wish I had your recipe.
I write yet another text about you, crying.
And once again — it’s not out of happiness.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '21',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(21).jpg',
        poem: {
            pt: `Efêmera, a vida é efêmera.
A vida é fera que congela a minha tempora.
De saudade dos momentos que não aproveitei.
E pior, não aproveitei sabendo que acabaria.
Eu não aproveito justamente por que eu fico pensando que vai durar pouco.
Eu chego preocupado com a partida.
E apartir das consequências dos meus erros, eu parto.
Eu bato em retirada pra retirar de mim essa insolência.
Síndrome de responsabilidade não necessariamente que não me permite viver.
Avivado eu vivo correndo em algum canto dentro de mim, na qual eu sinta com sinceridade.
Na qual, eu não me preocupe com efemeridade.
Na qual, eu comemore um aniversário sem nem saber a idade.
Por que isso só agora!?
Pouco me importa.
Eu já dei tempo ao tempo e ele já passou faz tempo.
Se eu pudesse te pedir um único favor.
Eu pediria o mais simples e complexo, viva.
Me abraçe com toda a sua inocência, eu tenho medo de te perder, talvez um dia você entenda minha carência.
Me olhe nos olhos como se o mundo fosse acabar e mesmo que não acabe desviara o seu olhar sabendo que aproveitou cada movimento de pupila.
Me abraçe como se fosse a última vez que você pudesse fazer isso.
Me abraçe como... Se fosse a última vez que pudesse contrair o músculo pra tal feito, e me desculpa, a minha intensidade pode ser um defeito.
E de novo eu te lembro e te peço, do mais simples e complexo.
VIVA.`,
            en: `Ephemeral — life is ephemeral.
Life is a beast that freezes my temple.
From missing the moments I didn’t take in.
And worse — I didn’t take them in knowing they would end.
I don’t enjoy them because I keep thinking it’ll last too little.
I arrive already worried about the goodbye.
And from the consequences of my mistakes, I depart.
I retreat to remove this insolence from myself.

Responsibility syndrome — not that it keeps me from living,
But I’m always running, awake, through some corner inside of me where I can feel sincerely.
Where I don’t worry about ephemerality.
Where I can celebrate a birthday without even knowing the age.

Why only now!?
I don’t really care.
I’ve already given time to time — and it passed a long time ago.

If I could ask you just one favor,
I’d ask for the simplest and most complex one: Live.

Hug me with all your innocence — I’m afraid of losing you.
Maybe one day you’ll understand my neediness.

Look me in the eyes like the world is about to end — and even if it doesn’t, you’ll look away knowing you made the most of every blink.
Hug me like it’s the last time you could ever do it.
Hug me as if... it were the last time you had strength to contract a muscle for that gesture.

And I’m sorry — my intensity might be a flaw.
And again, I remind you and I ask you, the most simple and the most complex thing of all:
LIVE.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '22',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(22).jpg',
        poem: {
            pt: `A vida tem um potencal de tristeza enorme.
Bom, eu tenho certeza que vocês entendem.
A única certeza da vida é a morte.
É um dogma que vai estampado no seu rosto desde que se entenda por gente.
-Tente tomar florais.
-Ler uns livros.
-Sorrir pra mais gente.
Precisa inventar motivos;
Em vente motivos.
Motiva essa gente.
Porque a vida vale mais a pena com gente.
Eu entendo a sua timidez, seus aspectros.
Maisss esteja ciente.
O indivíduo não precede o todo, entenda isso e siga em frente.
Desponte pro outro lado do mundo, tire fotos, fermente.
Tomara que as suas ideias cresçam e perdure na memória com o mesmo gosto, com o mesmo toque, com o mesmo rosto.
-Faça questão de lembrar do nome dos outros
Isso aproxima
-Dê bom dia pro motorista
-Tente abrir a porta pra alguém algum dia
Esse não é um texto sobre gentileza, são dicas?
Eu gostaria que fosse.
Se apegar em momentos é um vandalismo à alma.
Corra pros montes!
Apeguesse ao vento que bate no seu rosto.
Ou talvez na saudade de um dia que não podera mais vê lo
E quando ele chegar faça o favor de vivê-lo.`,
            en: `Life has an enormous potential for sadness.
Well, I’m sure you understand.
The only certainty in life is death.
It’s a dogma that’s stamped on your face from the moment you understand what it means to be human.

– Try some flower remedies.
– Read a few books.
– Smile at more people.

You need to invent reasons;
Invent reasons.
Motivate these people.
Because life is more worthwhile with people.

I understand your shyness, your specters.
But… be aware.
The individual does not come before the whole — understand that and move forward.

Set out for the other side of the world, take photos, ferment.
May your ideas grow and last in memory with the same flavor, the same touch, the same face.

– Make a point to remember people’s names.
That brings people closer.
– Say good morning to the driver.
– Try holding the door for someone someday.

This isn’t a text about kindness — are these tips?
I wish it were.

Clinging to moments is vandalism to the soul.
Run to the hills!
Cling to the wind that hits your face.
Or maybe to the longing for a day you’ll never see again.
And when that day comes — do yourself a favor and live it.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '23',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(15).webp',
        poem: {
            pt: `O silêncio e tela em branco pra quem faz da arte sua casa.
Nele eu pinto cada traço das histórias bonitas que conto.
Sinto que procuram na arte um refúgio.
E talvez falar da realidade seja incômodo à quem deseja sair de órbita.
Seria a ilusão a melhor saída pro labirinto dos dias intermináveis?
Talvez a arte seja o escape daqueles que assim como eu precisam de um abraço forte.
A arte é aquela que cura mas que toca na ferida.
A ilusão e a imaginação sempre me abriguou, mais estou aprendendo que sonhos só se realizam na realidade.
E o extraordinario só acontece fora da zona de conforto.
E talvez o desconforto momentânio mostre caminhos eternos.`,
            en: `Silence is a blank canvas for those who make art their home.
In it, I paint each stroke of the beautiful stories I tell.
I feel that people seek refuge in art.
And maybe speaking about reality is uncomfortable to those who wish to leave orbit.

Could illusion be the best way out of the maze of endless days?
Maybe art is the escape for those who, like me, need a strong embrace.
Art is what heals — but also what touches the wound.
Illusion and imagination have always sheltered me,
But I’m learning that dreams only come true in reality.
And the extraordinary only happens outside the comfort zone.
And maybe momentary discomfort reveals eternal paths.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '24',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(29).jpg',
        poem: {
            pt: `Hoje eu acordei
E me lembrei que causei dor no coração de alguns.
Briguei comigo mesmo e como sempre eu perdi a razão.
Busquei abrigo dentro do caderno, Meu lápis desapontado e eu
totalmente sem inspiração.
Sembre busco calma na respiração.
Mais ultimamente sinto que estou vivendo de baixo d'gua.
É muito dificil explicar uma emoção e sei que ninguem nunca
vai ser capaz de segurar o peso da minha fala.
Já faz uns dias que eu não converso comigo mesmo.
Pow Kaique tu é muito chato quando fala.
Desculpa se esse texto parece que eu to sério.
É que finalmente eu entendi que a vida não é uma piada.`,
            en: `Today I woke up
And remembered that I caused pain in some hearts.
I fought with myself, and as always, I lost reason.
I looked for shelter inside the notebook — my pencil blunt, and I,
completely without inspiration.
I always try to find calm in my breathing.
But lately, I feel like I’ve been living underwater.
It’s very hard to explain an emotion, and I know that no one will ever
be able to carry the weight of my words.
It’s been a few days since I talked to myself.
“Damn, Kaique, you’re really annoying when you talk.”
Sorry if this text makes me sound serious.
It’s just that I finally understood — life is not a joke.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '25',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(24).jpg',
        poem: {
            pt: `É madrugada e tá chovendo e eu com uma caneta e um caderno...
Me sinto em 2021 vivendo o paraíso e o inferno
Não vejo a Samara faz um tempo espero que ela esteja bem Minha mãe só vem aqui de vez em quando mais pelo menos vêm
Minha tia não confia muito em mim e o marido dela também Eu sinto falta de quem eu era...
Mesmo na época eu não sento ninguém
Sim, eu cresci e acho que finalmente encontrei meu caminho, eu era trem descarrilhado agora tenho trilho.
Todo mundo cresceu, sobraram poucos amigos mais mesmo antigamente com todo mundo na volta eu me sentia sozinho Todo mundo mudou, sinto falta do Bob
Agente ainda é amigo mais não com a mesma conexão Eu também mudei, vai ver, só eu sinto isso mas... Po cara eu te considerava meu irmão.
Esse ano foi muito pesado pra mim eu era só uma criança brincando de ser adulto.
É Loren você foi meu primeiro amor e a primeira que eu magoei desculpa
Eu era... Muito novo pra aquilo tudo.
Não tenho saúde mental pra estar sozinho de madrugada mais fala aí quem tem?
Eu devia tá dormindo po amanhã eu tenho aula É... 
Eu devia esquecer o passado também.`,
            en: `It’s late at night and it’s raining, and here I am with a pen and a notebook…
I feel like I’m in 2021, living both paradise and hell.
I haven’t seen Samara in a while — I hope she’s doing well.
My mom only comes by once in a while, but at least she comes.
My aunt doesn’t really trust me — and neither does her husband.
I miss who I used to be…
Even though, back then, I didn’t feel like I was anyone.

Yeah, I grew up, and I think I finally found my path.
I was a derailed train — now I have tracks.
Everyone grew up, and only a few friends remained. But even back then, with everyone around me, I still felt alone.
Everyone changed. I miss Bob.
We’re still friends, but not with the same connection.
I changed too. Maybe I’m the only one who feels this way… but damn, man, I used to see you as a brother.

This year was really heavy for me — I was just a kid pretending to be an adult.
And Loren, you were my first love and the first person I hurt. I’m sorry.
I was… way too young for all that.

I don’t have the mental strength to be alone in the middle of the night — but honestly, who does?
I should be sleeping, man, I have class tomorrow.
Yeah… I should forget the past too.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '26',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(6).webp',
        poem: {
            pt: `Isso que eu tô sentindo Poetas tentam explicar mas só suplicam há décadas O vazio relativo dos objetivos e metas
Que valor é esse que damos tanto incerto eu canto pq alivia a queimação do peito Viver o agora é simples, óbvio e perfeito Mas esse sentimento de novo Não é ergonômico
Um desconto orgânico que só tende a piorar
Pela primeira ver senti minha alma latejar
A dor de um luto que não existe
Um chamado sem resposta
Se alguém pudesse segurar minha cruz por um instante Eu alongaria as costas
Eu tô deitado e sinto fadiga Se alguém pudesse me dar uma dica
No fim somos perdidos recebendo conselhos Dos que estão um pouco menos.`,
            en: `What I’m feeling — poets have tried to explain it, but for decades, they’ve only pleaded.
The relative emptiness of goals and ambitions.
What is this value we give so much to, yet it’s uncertain? I sing because it eases the burning in my chest.
Living in the now is simple, obvious, and perfect — but this feeling, once again… it’s not ergonomic.
An organic discount that only tends to get worse.
For the first time, I felt my soul throb.
The pain of a grief that doesn’t exist.
A call with no answer.
If someone could carry my cross for just a moment, I’d stretch my back.
I’m lying down, and I feel exhausted. If only someone could give me a clue.
In the end, we’re just lost — getting advice from those who are just a little less lost.`
        },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(25).jpg',
        poem: {
            pt: `De fato
É muito bom viver quando se é amado
Eu olhei pra frente desviei dos problemas
Encontrei com você ao olhar pro lado
Ah se tivessem me contado
E se tivessem me contado que eu perderia o controle?
Ao tentar não te deixar me ver frágil
Que naquele momento não tão conciso
E se naquele dia eu não tivesse te dito tudo aquilo?
Um abraço dado
E um carinho amistoso
Um aviso
Se tivessem me contado que eu teria me apegado?
No primeiro deslize
Se eu não deslizasse ou se quer soubesse que iria?
Talvez... Tudo isso não aconteceria?
Se eu não tivesse falado tudo o que eu sentia?
Se tivessem me dado uma dica?
Um detalhe?
Ou sei lá
Raquel, eu te falo de forma não tão cordial
Se tivessem me contado que eu viraria seu filho
E que eu seria amado
Eu faria tudo igual.`,
            en: `Indeed,
It’s truly good to live when you’re loved.
I looked ahead, dodged the problems,
And I found you — when I looked to the side.

Oh, if only someone had told me...
What if someone had told me I’d lose control?
Trying not to let you see me fragile.
In that not-so-clear moment—
What if that day I hadn’t told you everything?

A hug given,
A gentle affection,
A warning.
What if someone had told me I’d get attached?

At the first slip—
What if I hadn’t slipped, or even known I would?
Maybe... none of this would have happened?
What if I hadn’t said everything I felt?
If someone had given me a hint?
A detail?
Or I don’t know...

Raquel, I say this to you in a way not so formal:
If someone had told me I’d become like your child,
And that I’d be loved—
I would’ve done it all the same.` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(23).jpg',
        poem: {
            pt: `foi a primeira vez que eu toquei, ou fui tocado Meu corpo se arrepiava como se recheado por um instinto, que eu não sei da onde veio 
            Eu me vi apavorado Eu peço desculpas todo o misticismo escrito por Álvaro,
Como fui capaz de ignorar o sentido, a fagulha Aquilo que fere mais cura Era só ter erguido um pouco mais os olhos Esteve tanto tempo em meu ponto cego
E mesmo que não estava pronto eu não nego
Comecei a sentir pelo corpo a verdade
Meus amados, eu senti pela primeira vez Numa noite Havia deitado como se ressona Mas avia alguém na cadeira talvez na mesa Me convida ou me aprisiona??
Era um convite!
Um chamado
Uma luz desconhecida que de tanto eu desconhecer Não poderia ser procada
Mais eu pude, eu não sei como mais pude
Tava perto da garrafa térmica era tão brilhando e claro Eu estava apavorado! Depois daquele dia, eu entendi que eu tinha enxergado
O que vocês chamam de Deus por todo lado.`,
            en: `It was the first time I touched, or was touched
My body shivered as if filled with an instinct I don’t know the source of
I found myself terrified
I apologize for all the mysticism written by Álvaro,
How was I able to ignore the meaning, the spark—
That which wounds but also heals?
I just had to lift my eyes a little higher
It had been in my blind spot for so long
And even though I wasn’t ready, I won’t deny it
I began to feel the truth run through my body

My beloved ones, I felt it for the very first time
One night, I had lain down, as if to dream
But someone was there — on the chair, maybe at the table
Was it an invitation or a trap?
It was an invitation!
A calling
A strange light — so unknown to me that its mystery made it untouchable
But I could... I don’t know how, but I could
It was near the thermos bottle, so shining, so bright
I was terrified!
After that day, I understood what I had seen—
What you all call God, everywhere.` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(10).webp',
        poem: {
            pt: `Eu conversei com Deus Mas eu fui contraditório 
            Mas ele entendeu a ação
             Não ganharei flores no meu velório 
             Mas eu morro no final de cada criação 
             Tive um duelo dentro da minha imaginação 
             Porque o Kaisui mata o Kaique e por respeito 
             Arrancou do peito seu coração Aleluia 
             Também falei da última depressão Dias deitado na cama pensando se eu 
             Tiraria minha vida só pra provar que eu não tô bem não 
             Porque morto teria atenção Tenho saudades do Paulin Tamo junto, irmão 
             Cê tava certo, esse mundo é ruim Mas a tristeza é minha inspiração 
             Penso o que eles vão pensar de mim
Quando eu tiver abaixo desse chão
Mas eu não vou mais pensar no fim
Porque afinal tudo que é real
No final pode ser ilusão`,
            en: `I spoke with God
But I was contradictory
Still, He understood the intention
I won’t be given flowers at my funeral
But I die at the end of every creation
I had a duel inside my imagination
Because Kaisui kills Kaique — and out of respect,
He ripped his heart from his chest
Hallelujah

I also spoke about the last depression
Days lying in bed wondering if I
Would end my life just to prove I’m not okay
Because dead, I’d get attention

I miss Paulin — we’re together, brother
You were right, this world is cruel
But sadness is my inspiration
I wonder what they’ll think of me
When I’m beneath the ground
But I won’t think about the end anymore
Because in the end, everything that feels real
Might just be an illusion` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/kaique(18).jpg',
        poem: {
            pt: `Eu escrevo coisas que nunca serão lidas
O problema sempre foi meu ego e minha teoria
Pra quem foi invisível a vida toda invisibilidade e pavorosa
Eles fingem que não me vêem
E fingem tão bem que eu acredito
Eu grito pela liberdade mais eu mesmo não me permito tela Eu vivo em função de ser visto por pessoas que eu nem quero
que me vejam
Então sim pai estou fazendo pelo ego.`,
            en: `I write things that will never be read
The problem has always been my ego and my theory
For someone who’s been invisible their whole life, invisibility is terrifying
They pretend they don’t see me
And they pretend so well, I believe it

I scream for freedom, but I don’t even allow myself to have it
I live to be seen by people I don’t even want
To see me

So yes, Dad — I’m doing it for the ego.

` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(17).jpg',
        poem: {
            pt: `Escrevi o seu nome em um muro
Não fiz isso de lápis pra não ter risco de apagar
Eu fiz bem fundo e escuro
Sempre que eu ver o muro posso te encontrar Se alguém o muro pintar Seu nome estará por debaixo da tinta
Eu sei aonde te escrevi
Eu sei aonde te encontrar
Se por ventura o muro cair
E na poeira seu nome descansar
Eu sou alérgico mais não tem problema
Será um prazer te respirar
Se alguém atirar fogo no muro
E sem ternura o muro queima
Eu posso ver o seu nome na fumaça
E na atmosfera vou te encontra
Se o muro deixar de existir
Na minha memória ele existira
Carregarei comigo um pedaço do muro
Aonde eu estiver você estará`,
            en: `I wrote your name on a wall
I didn’t use pencil — too easy to erase
I carved it deep and dark
So every time I see the wall, I can find you there

If someone paints over the wall
Your name will still be beneath the layers
I know exactly where I wrote you
I know exactly where to find you

And if by chance the wall collapses
And your name settles in the dust
I’m allergic — but it’s okay
It would be a pleasure to breathe you in

If someone sets the wall on fire
And without tenderness, it burns
I’ll see your name rising in the smoke
And I’ll find you in the air

If the wall ever ceases to exist
In my memory, it always will
I’ll carry a piece of that wall with me
Wherever I go, you’ll be there too` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(14).webp',
        poem: {
            pt: `Eu penso em amar a vida
Mais a vida nem sempre e muito amável
Eu penso em viver sozinho
Mais viver sozinho é meio deplorável
Eu penso que até quando eu acerto eu continuo meio errado em tudo
Então eu continuo errando
Como o último certo do mundo
E ainda me esperam do outro lado os desavisados com farpas
nós dentes
Os que não me deram nada
E os que se quer me olharam como suas pupilas apenas encontrassem os dignos
Os que riram da minha cara e os que tiveram vergonha dos meus risoS
E os desacreditados que passaram batido
Eu te disse agora as desvantagens de ser invisível`,
            en: `I think about loving life
But life isn’t always that lovable
I think about living alone
But living alone feels kind of pitiful
I feel like even when I get things right, I’m still a bit wrong in everything
So I keep making mistakes
Like the last right person in the world

And still, on the other side, the unaware ones wait for me — with splinters in their teeth
The ones who gave me nothing
And the ones who never even looked at me
As if their pupils only found the worthy
The ones who laughed in my face, and the ones who felt ashamed of my laughter
And those who didn’t believe — and passed me by like I wasn’t even there

I’ve just told you now the disadvantages of being invisible` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(21).jpg',
        poem: {
            pt: `Hoje eu me peço desculpas pela atrocidade que eu cometi
Hoje eu me peço desculpas por ser sempre de todos e nunca de mim
Hoje eu me peço desculpas por cada erro que continuo errando
Hoje eu me peço desculpas por no fim de tudo ainda ser humano
É que a visão anda tão estranha agora que eu notei o mundo de ponta cabeça que me aponta e me conta cada dia um erro novo

Thaís como faço pra voltar nós trilhos??
O trem descarrilhado já não sabe mais o caminho e morre de medo de machucar seu povo.... Eu olho pela janela e mesmo perdido eu reconheço a mata E como se eu já tivesse andado por aqui, E como se eu já estivesse vencido essa batalha
Thaís eu sei que minha bússola anda meio quebrada Eu tentei por 7 meses me encontrar e de tanto procurar acabei perdido no meio do nada
Talvez um dia eu me encontre sem nem percebe se eu tivesse seguido no trilho talvez eu já estivesse lá tomando café comigo mesmo
Talvez esse processo doloroso seja bom pra mim nunca esquecer Que não existe ser, existe estar e que café eu posso tomar em qualquer mesa
Essa vida e cheia de mistérios e metáforas, uma poesia torta impossível de entender E no lugar de letras a símbolos tão escondidos que já mais se poderia ler
Eu acho que ontem a vida deixou escapar um símbolo e eu até tentei...
Mais foi impossível de não perceber.`,
            en: `Today, I forgive myself for the atrocity I committed
Today, I forgive myself for always belonging to everyone, and never to me
Today, I forgive myself for every mistake I keep repeating
Today, I forgive myself for, after all, still being human

It’s just that… my vision’s been strange lately
Now that I’ve noticed the world is upside down
Pointing at me, showing me a new mistake every single day

Thaís… how do I get back on track?
This derailed train no longer knows the way,
And it’s terrified of hurting its own people

I look out the window, and even though I’m lost, I recognize the forest
It’s like I’ve walked here before
Like I’ve already won this battle

Thaís, I know my compass is kind of broken
I spent seven months trying to find myself
And from searching so much, I ended up lost in the middle of nowhere

Maybe one day I’ll find myself without even realizing it
Maybe if I had stayed on the track, I’d already be there
Having coffee with myself

Maybe this painful process is a gift
To remind me never to forget—
That we don’t exist, we are,
And that I can drink coffee at any table

This life is full of mysteries and metaphors—
A twisted poem, impossible to understand
And instead of letters, there are symbols so deeply hidden
They could never be read

But I think yesterday, life let one of those symbols slip
And I even tried to ignore it…
But it was impossible not to notice.` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(9).jpg',
        poem: {
            pt: `Depressão é o mal do século
E mata mais que a bala.
É o pior espetáculo se só tem você na sala.
Não tem cor, nem rosto
Nem jeito, nem dono Mas muda o jeito do rosto te faz pensar que é teu dono.
Parece um beco sem saída, Um grito sem ajuda Uma alma ferida que sempre se põe a culpa.
Me desculpa mãe querida, eu sei que é tudo minha culpa 
É que eu perdi o brilho da vida quando vi a vida adulta 
Meu lado racional diz: trabalha, estuda
E o outro: sai e se diverte
Emprego fixo é uma luta, disso meu pai me adverte.
A morte é a mulher mais linda, Difícil recusar o flerte Mais não existe mal ainda que uma poesia não reverte, entende?
Também já me senti inútil pro mundo, Por aqueles que admiro, totalmente abandonado 
Também já quis fugi pra esse mundo 
E ver como anda a vida lá do outro lado 
Procure ajuda pois não tem vergonha nisso 
Eu já estive em seu lugar, 
Já me senti um lixo 
O amor é a cura pra vida não a morte 
Existe outra saída, saiba disso.`,
            en: `Depression is the illness of the century
And it kills more than a bullet.
It’s the worst kind of show when you’re the only one in the room.
It has no color, no face,
No shape, no owner
But it changes your expression, makes you think it owns you.

It feels like a dead-end alley,
A scream with no response
A wounded soul that always takes the blame.

I’m sorry, dear mother — I know it’s all my fault
It’s just that I lost life’s glow when I faced adulthood.

My rational side says: work, study
And the other says: go out, have fun.
A stable job is a battle — my father always warned me.

Death is the most beautiful woman — hard to resist her flirt
But there’s no darkness that a poem can’t convert. You see?

I’ve also felt useless to the world,
Abandoned by those I admire the most.
I’ve also wanted to escape this world
And see how life goes on the other side.

Seek help — there’s no shame in that.
I’ve been in your shoes,
I’ve felt like trash too.

But love is the cure for life — not death.
There is another way. Please, believe in that.

` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(7).jpg',
        poem: {
            pt: `Qual foi a última vez que você prestou atenção no vento batendo no seu rosto?
Você compreende cada gota que corre no teu corpo no banho?
Eu sei kkk, falando assim parece até ser estranho, não é fácil desenvolver esse gosto
Mais eu te garanto que faz bem.
Escrevi essa pra te lembrar de viver, assim eu não esqueço também.
 A rotina hipnotiza a gente oque pode ser traumático.
Sabe aquela sensação de que você acabou fazer algo e quando presta atenção parece que nem aconteceu?
É o puro piloto automático Nossos dias tem sido cada vez menos consientes, assine, preencha, ande logo, deposite, coma, durma, não minta, se comporte, não sinta,não exite.
Por isso tanta gente disisteMãe eu não quero que você viva assim e é difícil sim
Mais se sente por cinco minutos e com postura respire 
.Apenas respire e análise o carnaval caótico que aconteceu em sua cabeça
Por favor torne isso uma rotina, eu te prometo que isso te anima
Sesibiliza, produz dopamina
Por favor Mirian, se dope disso
Assuma esse compromisso com o agora.
E não vai em bora, fixa que tem bolo <3
No final talvez AGT se abrace até chore.
Como diz Luiza é sobre isso
Oxigene sua mente
Comece por você
Mais faz isso pela gente.`,
            en: `When was the last time you really felt the wind on your face?
Do you notice every drop that runs down your body in the shower?
I know, haha, saying it like this might sound strange.
It’s not easy to develop that kind of awareness.
But I promise you — it does you good.

I wrote this to remind you to live,
So I don’t forget to live too.

Routine hypnotizes us — and that can be traumatic.
You know that feeling that you just did something,
But when you stop and think… it’s like it never even happened?
That’s pure autopilot.

Our days have become less and less conscious:
Sign here, fill this, hurry up, transfer, eat, sleep, don’t lie, behave, don’t feel, don’t hesitate.
That’s why so many people give up.

Mom, I don’t want you to live like that.
And yes, it’s hard.
But sit down for five minutes — with your back straight — and breathe.
Just breathe and observe the chaotic carnival that happened in your mind.

Please, make this a routine. I promise it’ll lift you up.
It’ll soften you, release dopamine.
Please, Mirian — get high on this.
Make a commitment to the now.
And don’t go away… stay. There’s cake, I swear. 🍰❤️

In the end, maybe we will hug, maybe we’ll cry.
Like Luiza says — “that’s what it’s all about.”

Oxygenate your mind.
Start with yourself.
But do it for all of us, too.` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(2).webp',
        poem: {
            pt: `Dias incríveis me aguardam(bom pelos eu oro por isso)
            Eu nunca fui de ser pé no chão mais o ano que eu passei me obrigou a ser que meus dedos doem e á terra entre minhas unhas
            O sou que nasce é o mesmo só espero que aquilo que é iluminado mude(pra melhor de possível)
            Foi o templo de plantioSó não espero colher daquilo se não era desse o grão, não
            Isso não é uma poesia mais aos poucos vai virando
            Ainda não tenho juízo mãe, mas eu tô criando 
            Foi se o tempo que eu empatei mais distante estou do zero, dias incríveis me aguardam, eu espero.`,
            en: `Incredible days await me (well… at least I pray for that)
I’ve never really had my feet on the ground,
But the year I went through forced me to keep them there — so much that my toes ache,
And there’s dirt under my nails.

The sun that rises is still the same,
I just hope what it shines on changes
(for the better, if possible)

It was a season of planting—
I just don’t expect to harvest anything if that wasn’t the seed I sowed, no.

This isn’t a poem…
But slowly, it’s becoming one.

I still don’t have much wisdom, Mom,
But I’m growing it.

The time of wasting is gone,
I’m far from zero now—
Incredible days await me.
I hope so.` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(1).jpg',
        poem: {
            pt: `Tô perdido em um labirintoNa minha cabeça nada mais faz sentido
            Tem pensado em nada faz dias acho que esse é o quinto
            Vi visões futuras do que eu tenho vividoMe fazendo perguntas do tipo: você é convencido ou é como tem sido?
            Não sei mais se vou ou se ficoSe me aqueto ou chamoNão sei mais quem gosto Não sei mais quem amoCheio de palavras meu subconsciente tem sido um inventário.Vivo correndo atrás de respostas mais vivo sendo sedentárioE quase sempre meu mal humor é temporário.
            Mais eu perdi, confesso que contra sentimentos eu não sou pário `,
            en: `I’m lost in a maze
Nothing in my head makes sense anymore
I’ve been thinking about nothing for days — I think this is the fifth
I’ve seen future visions of the life I’m living
Asking myself questions like: Are you arrogant, or is this just how you’ve been?

I don’t know whether to go or to stay
Whether to calm down or call out
I don’t know who I like anymore
I don’t know who I love

My subconscious is packed with words — it’s become an inventory
I keep chasing answers, yet I live so sedentary
And most of the time, my bad moods are only temporary
But I’ve lost — I admit, when it comes to feelings, I’m no match.` },
        createdAt: '2024-06-20'
    },
    {
        id: '27',
        title: {
            pt: 'Ecos do Passado',
            en: 'Echoes of the Past'
        },
        imageUrl: 'src/0(4).webp',
        poem: {
            pt: `Durante a minha vida eu sempre quis ter algo tipo um sentido aranha sabe?
Eu ser avisado de que as coisas vão dar ruim, e eu conseguir driblar elas
Mas... Não existe isso.
Ao escutar a sirene eu correria,eu gritaria, eu agiria, eu saberia oque fazer
Ao escutar a sirene anter disso tudo acontercer eu iria exatamente pra você.
O barulho da tal sirene entraria sem pedir licença e ia direto pra dentro da mente só iria com crença e bilhetaria de repente com esse som estridente,
Saberia o que tinha que agir que não precisa viver nesse momento aqui que o agora é importante seguir
As palavras viriam mais cedo a sirene tocando eu sabendo que não seria perfeito que acabaria de mal jeito
Escutando a sirene eu teria um lugar para me esconter
Iria pra um lugar bom pra evitar sofre e empediria de isso acontecer
E faria o que fosse preciso fazer ou então aproveita em quanto o último segundo restastar
Saberia a hora exata que ia acabar
Eu fiquei esperando tal sirene tocar
Sirene não alerta
Sirene não existe
Então eu deveria ter aproveitado enquanto via
Aproveitar pra falar com tigo
Eu não sei quando será a ultima vez que eu vou te ver na rua e nem sei se um dia vou poder falar com você
Mas eu me arrependo amargamente por não voltar no passado de repente e poder te dizer o quanto eu te amei e reclamei por ter medo te não ser infinito
Mas você partiu e a minha vida, eu sigo
Pouco eu te disse o que queria ter dito
Bom, eu tinha que ter dito
Sirenes não existem
E pra te deixar partir eu ainda não estou preparado
Mas agora prometo que viverei todos os dias como se a sirene estivesse tocado.`,
            en: `ll my life, I wished I had something like a spider-sense, you know?
To be warned when things were about to go wrong — and be able to dodge them.
But... that doesn’t exist.

If I heard the siren, I would run, I would scream, I would act, I would know what to do.
If I heard the siren before it all went down — I’d go straight to you.

That loud siren sound would burst into my mind without asking permission,
Only faith would let it in — and suddenly, with that piercing sound,
I’d know I had to act, that I didn’t need to stay in this moment anymore,
That the now was meant to be lived, meant to be moved through.

The words would’ve come earlier.
The siren ringing — I’d know things wouldn’t be perfect, that they’d end badly.
If I heard the siren, I’d have a place to hide,
I’d run to somewhere safe — to avoid pain, to stop it all from happening.

I’d do whatever had to be done
Or I’d simply enjoy the very last second.
I’d know the exact moment everything would end.

I kept waiting for the siren to sound.
But sirens don’t warn.
Sirens don’t exist.

So I should have made the most of the time I had.
I should have talked to you.

I don’t know when I’ll see you on the street for the last time,
And I don’t know if I’ll ever get the chance to talk to you again.
But I deeply regret not suddenly going back in time,
Just to tell you how much I loved you,
And how I complained because I was afraid it wouldn’t last forever.

But you left — and now I carry on with life.
I said so little of what I wanted to say.
Well… I should’ve said it.

Sirens don’t exist.
And I’m still not ready to let you go.
But now I promise: I will live every day
As if the siren had already sounded.` },
        createdAt: '2024-06-20'
    }

];

// Se quiser adicionar até 26, basta seguir o padrão:
for (let i = artworks.length + 1; i <= 26; i++) {
    artworks.push({
        id: String(i),
        title: {
            pt: `Obra ${i}`,
            en: `Artwork ${i}`
        },
        imageUrl: `src/0(${i}).webp`,
        poem: {
            pt: '',
            en: ''
        },
        createdAt: '2024-07-01'
    });
}

// Translation dictionary
const translations = {
    portfolio: { pt: 'Portfólio', en: 'Portfolio' },
    drawings: { pt: 'Desenhos', en: 'Drawings' },
    poetry: { pt: 'Poesia', en: 'Poetry' },
    viewArtwork: { pt: 'Ver Obra', en: 'View Artwork' },
    close: { pt: 'Fechar', en: 'Close' },
    createdOn: { pt: 'Criado em', en: 'Created on' },
    myArtwork: { pt: 'Minha Arte', en: 'My Artwork' },
    drawingsAndPoetry: { pt: 'Desenhos & Poesia', en: 'Drawings & Poetry' },
    copyright: { pt: 'Minha Arte © 2024', en: 'My Artwork © 2024' }
};

// Application state
let currentLanguage = 'pt';
let selectedArtwork = null;

// DOM Elements
const elements = {
    languageBtn: document.getElementById('language-btn'),
    languageText: document.getElementById('language-text'),
    mainTitle: document.getElementById('main-title'),
    subtitle: document.getElementById('subtitle'),
    footerText: document.getElementById('footer-text'),
    artworkGrid: document.getElementById('artwork-grid'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalImage: document.getElementById('modal-image'),
    modalTitle: document.getElementById('modal-title'),
    modalDateText: document.getElementById('modal-date-text'),
    modalPoem: document.getElementById('modal-poem'),
    poetryTitle: document.getElementById('poetry-title'),
    closeBtn: document.getElementById('close-btn')
};

/**
 * Initialize the application
 */
function init() {
    renderArtworkGrid();
    updateLanguage();
    bindEvents();
}

/**
 * Bind event listeners
 */
function bindEvents() {
    // Language toggle
    elements.languageBtn.addEventListener('click', toggleLanguage);

    // Modal close events
    elements.closeBtn.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) {
            closeModal();
        }
    });

    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && selectedArtwork) {
            closeModal();
        }
    });
}

/**
 * Toggle language between PT and EN
 */
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage();
    renderArtworkGrid();

    // Update modal if open
    if (selectedArtwork) {
        updateModalContent();
    }
}

/**
 * Update all text elements with current language
 */
function updateLanguage() {
    elements.languageText.textContent = currentLanguage.toUpperCase();
    elements.mainTitle.textContent = translations.myArtwork[currentLanguage];
    elements.subtitle.textContent = translations.drawingsAndPoetry[currentLanguage];
    elements.footerText.textContent = translations.copyright[currentLanguage];
    elements.poetryTitle.textContent = translations.poetry[currentLanguage];

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en-US';
}

/**
 * Render the artwork grid
 */
function renderArtworkGrid() {
    elements.artworkGrid.innerHTML = '';

    artworks.forEach(artwork => {
        const artworkItem = createArtworkItem(artwork);
        elements.artworkGrid.appendChild(artworkItem);
    });
}

/**
 * Create a single artwork item
 */
function createArtworkItem(artwork) {
    const item = document.createElement('div');
    item.className = 'artwork-item';
    item.addEventListener('click', () => openModal(artwork));

    item.innerHTML = `
        <img 
            src="${artwork.imageUrl}" 
            alt="${artwork.title[currentLanguage]}"
            class="artwork-image"
            loading="lazy"
        />
        <div class="artwork-overlay">
            <div class="overlay-content">
                <h3>${artwork.title[currentLanguage]}</h3>
                <p>${translations.viewArtwork[currentLanguage]}</p>
            </div>
        </div>
    `;

    return item;
}

/**
 * Open modal with artwork details
 */
function openModal(artwork) {
    selectedArtwork = artwork;
    updateModalContent();
    elements.modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

/**
 * Update modal content with current artwork and language
 */
function updateModalContent() {
    if (!selectedArtwork) return;

    elements.modalImage.src = selectedArtwork.imageUrl;
    elements.modalImage.alt = selectedArtwork.title[currentLanguage];
    elements.modalTitle.textContent = selectedArtwork.title[currentLanguage];
    elements.modalPoem.textContent = selectedArtwork.poem[currentLanguage];

    // Format date
    const date = new Date(selectedArtwork.createdAt);
    const formattedDate = currentLanguage === 'pt'
        ? date.toLocaleDateString('pt-BR')
        : date.toLocaleDateString('en-US');

    elements.modalDateText.innerHTML = `${translations.createdOn[currentLanguage]} ${formattedDate}`;
}

/**
 * Close modal
 */
function closeModal() {
    selectedArtwork = null;
    elements.modalOverlay.classList.remove('show');
    document.body.style.overflow = 'unset';
}

/**
 * Format date based on current language
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return currentLanguage === 'pt'
        ? date.toLocaleDateString('pt-BR')
        : date.toLocaleDateString('en-US');
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);