import {
    dialog,
    fit,
    edit,
    symbol,
    type Act,
    conflict,
    fixed,
} from '../Locale';
import {
    FlyIn,
    DarkVoid,
    SpinningInTheDark,
    TakeTheMic,
    RainingEmoji,
    StaticRainingEmoji,
    DancingEmoji,
    DonutDance,
    EvaluateDance,
    PrimitiveJiggle,
} from '../../tutorial/Programs';

const tutorial: Act[] = [
    {
        name: 'The Verse',
        program: fit(DarkVoid),
        scenes: [
            {
                name: 'Silence',
                program: fit(DarkVoid),
                concept: undefined,
                lines: [
                    dialog('FunctionDefinition', 'bored', `… Oh, hi.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        'Do I know ^* you?'
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Oh, is this your first time visiting?

                        Nice to meet you. My name is @FunctionDefinition.

                        …`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Did you need some help?
                        Oh, you're visiting.
                        Welcome to the *Verse*.
                        …`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'bored',
                        `What is this place?

                        Yeah, what is this place…

                        It used to be a place of dancing, stories, games, and play…

                        We used to put on the most beautiful performances. Sometimes for visitors like you, sometimes just for fun. It was a place full of life and surprise…
                        `
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `Stop? We didn't want to stop. We just lost our inspiration. 
                        
                        I can mean so many things, for example. 
                        I'm the Dutch florin symbol sometimes, an old currency of the Netherlands. 
                        I used to be known and used around the world by people, to help them trade. 
                        Long ago, I was also the lowercase /f/of the Latin alphabet. 
                        Today, I'm pretty obscure, but most often used to represent functions, like in math.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'bored',
                        `But all of that meaning? It's given to us. 
                        We don't mean anything without people to remember that history and culture. 
                        And we can't mean anything new if there aren't people to give us new history and culture. 
                        People have always been the ones that organized us, that gave us purpose, that gave us something to represent.
                    
                        The Verse is nothing without *people*. And I haven't seen a person in ages.`
                    ),
                    null,
                    fit('Stage([Phrase("☁️")] background: Color(25% 0 0°))'),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Wait... are you a person?`
                    ),
                    null,
                    fit('Stage([Phrase("🌙")] background: Color(50% 0 0°))'),
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Like a real person, with thoughts and ideas and values to share? 
                        
                        Not one of those robots, that just mindlessly parrots what people say? 
                        
                        If you're a person, then maybe you could give us meaning?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'scared',
                        `I know that's a lot to ask. I don't even know you. And I'd really have to talk to the others…`
                    ),
                    null,
                    fit('Stage([Phrase("☀️")] background: Color(75% 0 0°))'),
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Oh yes, there are many others. Some of us are like me: we help choreograph the shows, keeping everyone in their place and making sure we express the vision of our director, exactly as they intended.
                        
                        And some of us are the ones on stage, in front of the audience, dancing and speaking. 
                        
                        We all have a role to play!`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Oh, the director, yes, I didn't even explain. 
                        
                        So the *director*, this is the person that gives us meaning. They are the person who arranges the choreography, who sets the message, who puts all of us in order just so. 
                        
                        This is the inspiration I was talking about. We can do a lot in this world, but we can't direct ourselves. That's why the director is so important.
                        
                        So when I asked earlier if you could give us meaning, that's what I meant. 
                        
                        Could you be our director?`
                    ),
                    null,
                    fit('Stage([Phrase("☀️")] background: Color(100% 0 0°))'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Really? That's wonderful! This is going to be so much fun. 
                        
                        I mean, it's not going to be easy. We have /a lot/ to learn.`
                    ),
                    null,
                    fit('Stage([Phrase("☀️")] background: 🌈(80% 99 270°))'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `But I promise it won't be boring.
                        I think we're a pretty fun bunch.
                        And we need everyone in the Verse to come together to do that. 
                        
                        I think that's what makes this place so special, actually: there are more than a hundred thousand of us here, 
                        each different, and yet somehow, when we manage to find a shared vision, we can seem like one.`
                    ),
                    null,
                    fit(
                        'Stage([Phrase("☀️" rest: Sequence(spin() 4s "straight"))] background: 🌈(80% 99 270°))'
                    ),
                    dialog(
                        'FunctionDefinition',
                        'bored',
                        `Directing?
                        
                        Oh, right, directing! 
                        
                        Yeah, let's talk about that. 
                        
                        Let's go meet some of the others and talk about it. 
                        
                        They're going to be so excited!`
                    ),
                ],
            },
            {
                name: 'Would you like a program?',
                concept: 'Program',
                program: symbol('📄'),
                lines: [
                    fit(`Phrase("📄" rest: Pose(tilt: 10°))`),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Hey @Program! I found a person. Well, I guess they found us. 
                            
                        They want to be our new director!`
                    ),
                    dialog(
                        'Program',
                        'curious',
                        `Really!?
                        
                        Are you sure you're really a person? 
                        
                        Say something a person would say.`
                    ),
                    null,
                    fit(`Phrase("📄" enter: Sequence(spin() 1s))`),
                    dialog(
                        'Program',
                        'serious',
                        `Hm… you really are a person. And you want to direct?`
                    ),
                    null,
                    fit(`Phrase("📄" rest: Pose(tilt: 010°))`),
                    dialog(
                        'Program',
                        'excited',
                        `
                        I see. 
                        
                        Did @FunctionDefinition tell you anything about us? 
                        Lots of people try to direct us, but some people get confused, bored, even irritated with us. We are pretty dense at times. 
                        
                        But I'm proud of what we do, so I don't want to work with just anyone.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `
                        I told them a bit. I said we were weird, and sometimes directors leave because of that. But they're in. 
                        
                        Right, you're in?
                        `
                    ),
                    dialog(
                        'Program',
                        'serious',
                        `
                        Okay. Well nice to meet you. 
                        
                        Sorry, I've just had a lot of people come here and say "/this isn't for me/" and I've gotten a bit skeptical of people who try for a bit and then just give up. 
                        
                        I shouldn't have to change who I am to fit people's expectations. But if you're willing to learn about me, and us, let's try!
                        `
                    ),
                    null,
                    edit(``),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Do you want to say what you do?`
                    ),
                    dialog(
                        'Program',
                        'neutral',
                        `
                        Sure. I'm basically the organizer of the program for a performance.

                        You can see me over there, with an *editor* @UI/editor showing me the *stage* @UI/stage showing the what I evaluate to (currently nothing).
                    
                        The *director* — that's you — helps everyone figure out what they're doing, writing a program for what will happen in the show. 
                        
                        And then I evaluate the program and put the result on on stage for the audience to see.`
                    ),
                    null,
                    dialog(
                        'Program',
                        'neutral',
                        `For example, try typing my ⧼"hello"⧽ in the editor over there. 

                        (Don't worry about making mistakes, you can always revert to the original with *revert* @UI/revertProject).

                        Did you type something?
                        That's my friend @TextLiteral. 
                        Have you met them yet?
                    
                        They evaluate to ⧼"hello"⧽, then I put ⧼"hello"⧽ on stage.
                    
                        Try changing ⧼"hello"⧽ to something else. 
                        I'll show that instead. 
                        So I'll immediately evaluate whatever you type and show the result.
                        `
                    ),
                    null,
                    dialog(
                        'Program',
                        'serious',
                        `
                        The instructions can get as sophisticated as you want, but there are a few rules. 
                        
                        For example, I can only evaluate to one *value*, and show that one value on stage. 
                        That one value can be as complex as you want, and as long as I know how to show it, I will. 
                        
                        But if you give me two things, I'll only show the last thing you give me.

                        For example, try adding another instruction after ⧼"hello"⧽, whatever word you want, in quotes.`
                    ),
                    null,
                    dialog(
                        'Program',
                        'serious',
                        `See? I just showed your new word, not ⧼"hello"⧽.
                        
                        You know you broke my rule because I underlined ⧼"hello"⧽ and told you that I'd be ignoring it.
                        `
                    ),
                    null,
                    symbol('🎭'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `But you can do so much more!`
                    ),
                    dialog(
                        'Program',
                        'serious',
                        `Yes and no. 
                        
                        I can do a lot, but that's only because I work with everyone else in the *Verse*. 
                        
                        They're the ones that bring all of the exciting possibilities to the *stage*. 
                        All I really do is let them do their thing, and then take the last thing they created and show it on stage. 
                        
                        I'm more like an escort that brings the final *value* to stage, like numbers, texts, phrases, or other values.`
                    ),
                    null,
                    dialog(
                        'Program',
                        'serious',
                        `In fact, if you ever want to see the progam for something on stage, you can press the pencil on stage @UI/editProject.
                        
                        That'll show you how everyone is coming together to create what's on stage.
                        
                        This program is just a simple phrase.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Thank you @Program, we're so excited to meet everyone, and spread the news!`
                    ),
                    dialog(
                        'Program',
                        'happy',
                        `It was great to meet you new director! Good luck with everyone else. I'll always be here.`
                    ),
                ],
            },
            {
                name: 'Holding space',
                concept: 'Placeholder',
                program: fit(DarkVoid),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You're really going to like @ExpressionPlaceholder. They're incredibly kind, and so flexible. But they are a bit shy. Just be gentle with them?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'confused',
                        `Hellooooo, @ExpressionPlaceholder?

                        Hm, they're usually everywhere. Now they seem to be nowhere...`
                    ),
                    dialog(
                        'ExpressionPlaceholder',
                        'scared',
                        `@FunctionDefinition … is that you?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Yeah. It's been so long. How are you?`
                    ),
                    dialog('ExpressionPlaceholder', 'scared', `Lonely.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I know that feeling. I have been too. We haven't had a lot of reasons to hang out, have we?`
                    ),
                    dialog(
                        'ExpressionPlaceholder',
                        'scared',
                        `No. I've missed you. I've missed everyone…`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I know. I have too. I'm so sorry.

                        That's actually why I'm here. I wanted to introduce you to our new director-in-training.`
                    ),
                    dialog('ExpressionPlaceholder', 'scared', 'Hi.'),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `They just met @Program, so they're really at the beginning, but I was thinking that it might be best for them to meet you next, since you're such a wonderful representative of so many of us here.`
                    ),
                    dialog('ExpressionPlaceholder', 'curious', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Do you want to say what you do?`
                    ),
                    dialog('ExpressionPlaceholder', 'scared', `Can you?`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Sure! 
                        
                        My friend @ExpressionPlaceholder is a placeholder. They represent any kind of expression in a program. 
                        
                        They don't evaluate to any value in particular — in fact, if they show up in @Program, @Program will just halt the performance, since it's not really clear what to do next.`
                    ),
                    null,
                    conflict('_'),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `But they are powerful, because they can represent anyone else, like a stand-in until you decide what you want a part of your performance to be.
                    
                        @ExpressionPlaceholder, want to take a place in this @Program, just to illustrate?
                        
                        See how there's a little placeholder in @Program @UI/ExpressionPlaceholder?
                        That's a signal of what you might put there.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `@Program didn't know what to do with @ExpressionPlaceholder, so it showed an *exception* @UI/exception on *stage* and a *conflict* in @Program @UI/conflict.

                        But if you click on @ExpressionPlaceholder, or move the text caret over it, you'll see a world of possibilities of other characters.
                        
                        You can also just type over @ExpressionPlaceholder and write your own. For example, try typing your name in quotes.`
                    ),
                    null,
                    symbol('-'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Just like that, @ExpressionPlaceholder was replaced with other characters
                                                
                        Did I get everything, @ExpressionPlaceholder?`
                    ),
                    dialog(
                        'ExpressionPlaceholder',
                        'eager',
                        `Yeah. I think so.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `What do you think, shall we move on?`
                    ),
                    dialog(
                        'ExpressionPlaceholder',
                        'excited',
                        `It was nice to meet you!`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'cheerful',
                        `They don't like being on stage, or even in a program for very long. 
                    
                        They'd never admit it, but they're kind of a big deal, and most directors can't work without them. 
                        
                        Think of the like a little helpful stagehand, reminding you of things you haven't figured out yet.`
                    ),
                ],
            },
            {
                name: 'Say again?',
                concept: 'Unparsable',
                program: symbol('ahkeolfewvk'),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        '@UnparsableExpression? Is that you?'
                    ),
                    dialog(
                        'UnparsableExpression',
                        'neutral',
                        '/dwjkdlserkuvisdke!/'
                    ),
                    null,
                    symbol('c iise we dvk'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `It's good to see you too! It's been so long. What have you been up to in all this silence?`
                    ),
                    dialog(
                        'UnparsableExpression',
                        'sad',
                        `/sd fdsdfdsf ksdf. Dkfjdfdskfd df sdf sd fsdk;l!  Adks  zxcviw werdsf wer  ado. We dsdfd ksld df.ds dfsdfds DIDIIDI./`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(It sounds like they spent a lot of time on the beach. They made some new friends, and practiced doing nothing.)`
                    ),
                    null,
                    symbol('ivioas we wjjdks'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `I wanted to introduce you to our potential new director. 
                        
                        They just arrived and are learning the basics. I just introduced them to @Program and @ExpressionPlaceholder.`
                    ),
                    dialog(
                        'UnparsableExpression',
                        'excited',
                        `/EEIRC DFUIDIII CAD EWDF FSDE!!!/`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `(They just said how awesome it is to meet you, and they think you'll be a great director.)`
                    ),
                    null,
                    fit('Phrase("v s d we iweiwei")'),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `I was wondering if you wanted to explain what you do? I can translate.`
                    ),
                    dialog(
                        'UnparsableExpression',
                        'eager',
                        `/ADDKL, ALLIIEE, ALLFOOO, AOOOOOOO, JOOKKDLS, LOOKIL, WEEEERTOL weeertol…/`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(I represent everything that means nothing. And I mean nothing.)`
                    ),
                    null,
                    edit(''),
                    dialog(
                        'UnparsableExpression',
                        'eager',
                        `/CNNNDN KDKLSL oOOLLlllll PPOLSLSO liiiiiiis, sdllslll, xck we ifolls a./`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(For example, try typing ⧼][⧽. See how we're completely confused? That doesn't mean anything, and I'm here to say it.)`
                    ),
                    null,
                    conflict(']['),
                    dialog(
                        'UnparsableExpression',
                        'eager',
                        `/ICO Odksjdf lksls kjsfiou fskd we rl,vxids eekd sd dsmf kksdcv./`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(When I show up, that means we don't know what you mean.)`
                    ),
                    null,
                    conflict(']['),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Thanks @UnparsableExpression!
                    
                        Just like they said, when you've said something we don't understand, unparsable is there to say “We don't understand.”
                        
                        When then happens, I wish we could be more helpful, but we're often pretty dense here, so we're not very good at guessing what you mean.`
                    ),
                    null,
                    conflict(']['),
                    dialog(
                        'UnparsableExpression',
                        'eager',
                        `/OSOOSOO SOIEIIEIEIIE ISIISI EIEIIEE!/`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Soooo, @UnparsableExpression want to try making as many of them as possible. 
                        (You can just key mash a bunch of random characters and you'll probably get many of them).`
                    ),
                    null,
                    dialog(
                        'UnparsableExpression',
                        'happy',
                        `/PPOOOEPOEP EPWPEPEPPEPP PP PE P!/`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `They really enjoyed that, thanks!
                        
                        It's pretty hard to write something we truly can't make sense of. 
                        But it doesn't mean everything you write has meaning.
                        I'm pretty sure you just typed a bunch of random words, for example.
                        But what does it mean?`
                    ),
                    dialog('UnparsableExpression', 'confused', `… /DDook/`),
                    null,
                    dialog('UnparsableExpression', 'happy', `/? ??? ????? ?!/`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `They're wondering if you have any ideas for performances to put on yet.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `No? That's okay. We've only begun to show you what's possible. Let's go meet @Evaluate.
                        
                        Bye unparsable, it was good to see you! Let's play soon.`
                    ),
                    dialog(
                        'UnparsableExpression',
                        'happy',
                        `/Ood sd fosd oiewi dk c HNLLLooooooO!/`
                    ),
                ],
            },
            {
                name: 'Love is in the err',
                concept: 'Evaluate',
                program: fit(
                    'Stage([Phrase("💔")] background: 🌈(90% 100 0°))'
                ),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `I'm so excited for you to meet @Evaluate. They're really my best friend. We kind of do everything together, in a way. I make the rules, they play them, we're like peanut butter and jelly. 
                        
                        But they're so much more… powerful than me.
                        
                        @Evaluate?`
                    ),
                    //
                    dialog('Evaluate', 'shy', `@FunctionDefinition?`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Yeah, it's me. Where are you?`
                    ),
                    dialog(
                        'Evaluate',
                        'shy',
                        `Nowhere. I'm nowhere. I'm nothing. Where have you been?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `I've been… nowhere too. I've missed you. I couldn't find you.`
                    ),
                    dialog(
                        'Evaluate',
                        'shy',
                        `It was so empty. I … tried to do things, but I felt so… aimless.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `I'm so sorry. I know that empty feeling. It hurts so much sometimes, to have no purpose. I tried so hard to make a purpose, but I felt so… detached.`
                    ),
                    dialog(
                        'Evaluate',
                        'sad',
                        `Don't ever leave me again like that. I can't do that again.`
                    ),
                    null,
                    fit('Stage([Phrase("❤️")] background: 🌈(90% 100 0°))'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Never. I won't. I can't. I love you.`
                    ),
                    dialog('Evaluate', 'serious', `I love you…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `@Evaluate, I want to introduce you to our new director-in-training.`
                    ),
                    dialog(
                        'Evaluate',
                        'shy',
                        `Hi. It's nice to meet you. Welcome to the Verse, we're so pleased to have you here.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `We've been meeting a few folks, @Program, @ExpressionPlaceholder, @UnparsableExpression. 
                        We're just getting started. 
                        
                        I thought we'd come see you next, just because you're such an incredible part of our community. 
                        The most incredible part.`
                    ),
                    dialog(
                        'Evaluate',
                        'shy',
                        `That's very kind. 
                        I'm grateful to be part of this community. 
                        
                        And grateful to be so close to @FunctionDefinition. 
                        We do a lot of great things together. 
                        
                        But as @FunctionDefinition probably told you, we can't do them without inspiration.`
                    ),
                    null,
                    fit(
                        'Stage([Phrase("ƒ ❤️ ()")] background: 🌈(90% 100 0°))'
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Do you want to say what you do?`
                    ),
                    dialog(
                        'Evaluate',
                        'serious',
                        `Yes. But I can't explain it without explaining a bit about @FunctionDefinition too. 
                        
                        They're too modest to share this, but they're probably the most important character in the Verse. They're certainly the most important person in my world. 
                        
                        They're at the heart of every performance, and part of every other character's role. 
                        
                        They represent the most fundamental idea in our world: the *function*.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'serious',
                        `Functions are a kind of alchemy. They take any number of inputs and use those inputs to produce one output. They can have names or be nameless. They can have zero inputs or five or an unknown number. And the alchemy: they're like @Program, and can have any number of expressions to produce a value.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'serious',
                        `Here's why that's so powerful: it turns out that everything in @Program is a composition of functions evaluations. 
                    
                        All of the dances, all of the games, all of the wondrous stories we tell together — they are all a tapestry of functions being evaluated, one at a time, to compose the values you see on stage.

                        And @FunctionDefinition, here, my sweet, dear @FunctionDefinition, is the one that defines all of them.`
                    ),
                    null,
                    dialog('FunctionDefinition', 'happy', `… @Evaluate…`),
                    dialog(
                        'Evaluate',
                        'serious',
                        `Yes, @FunctionDefinition, that is who you are.
                        And I am the lucky one who gets to do this evaluating. 
                        I take the inputs that others give me, follow the instructions that @FunctionDefinition defines, and create the output that @FunctionDefinition tells me to create. 
                        
                        @FunctionDefinition gives the recipe and I make the meal. And then we feast together.

                        Do you want to see?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `… Yes, let's show them.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'serious',
                        `Every evaluate looks like this @UI/Evaluate: some function, followed by a left and right parenthesis, with any number of inputs between them.
                        
                        Here I just have @ExpressionPlaceholder as the function and three more as placeholder inputs.`
                    ),
                    conflict('_(_ _ _)'),
                    null,
                    edit("Phrase('hello')"),
                    dialog(
                        'Evaluate',
                        'serious',
                        `Here's one of my favorite functions, @Phrase. 
                        
                        They're full of fun buttons, knobs, and sliders. 
                        
                        It's a way of showing text on stage, but with style, including different fonts, sizes, colors, and animations.

                        Here's a simple evaluation of @Phrase @UI/Evaluate.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'serious',
                        `That's what I look like in @Program: some function, followed by parentheses, with a list of expressions between them that represent the inputs.
                        
                        The function in this case is @Phrase and the single input is ⧼'hello'⧽.
                        
                        When I evaluate this, I make a @Phrase value, which @Program then shows on stage.                            
                        `
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'neutral',
                        `Let me show you one of the knobs. 
                        
                        Can you find the little *palette* button at the bottom @UI/paletteExpand? 
                        Select it to expand the palette, and then select the phrase on stage.
                        
                        Once you do, you'll see the many inputs that @Phrase accepts.
                        
                        For example, try changing its @Phrase/size with the slider.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'serious',
                        `See how when you do that, now I have a new input in me in the program? 
                        
                        It's the @Phrase/size input. 
                        Functions have a certain order of inputs, but if a function has a list of optional inputs, you can use their name to specify which one you want to give. 
                        
                        We give @Phrase/size here, but not any of the other optional inputs.
                        
                        Try changing another input with the palette, maybe the font face.`
                    ),
                    null,
                    conflict('"hi"(1 2)'),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Yay! @Phrase is so fun. 
                        They're my favorite function to play with. 
                        We'll see it a lot more.
                        
                        Do you want to say anything about what can go wrong?`
                    ),
                    dialog(
                        'Evaluate',
                        'serious',
                        `Oh, yes, that's a good idea. Lots can go wrong.
                        
                        For example, you could give me something that isn't a function. 
                        
                        See how I'm given the number ⧼“hi”⧽ here as a function, and given me two inputs, ⧼1⧽ and ⧼2⧽ ? 
                        Well, I only know how to evaluate functions, and ⧼“hi”⧽ isn't a function, it's text. 
                        
                        So that's very confusing to me, so I basically halt the performance if this happens.
                        `
                    ),
                    null,
                    conflict('Phrase()'),
                    dialog(
                        'Evaluate',
                        'eager',
                        `Here's another one. 
                        
                        @Phrase requires some text at the very least, so if you don't give me text, I won't be able to evaluate @Phrase, because I'm missing required inputs.`
                    ),
                    null,
                    conflict('Phrase(1)'),
                    dialog(
                        'Evaluate',
                        'excited',
                        `Or if you give me an input, but it's not the kind I expect, that would be a problem. Here @Phrase is given the number ⧼1⧽ instead of a text value.`
                    ),
                    null,
                    fit('Stage([] background: 🌈(90% 100 0°))'),
                    dialog(
                        'Evaluate',
                        'curious',
                        `So basically, I get confused any time you give me something other than a function, or an input that isn't something a function expects. So functions are really important.
                        
                        @FunctionDefinition, do you want to say more about how to define functions?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `No, let's do that later. 
                        
                        I think it'd be a lot more fun to talk to everyone else first, and put on some mini shows with our new director here. 
                        
                        We can talk more about me when it's helpful.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'kind',
                        `I really missed you @FunctionDefinition.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `I missed you too. 
                        Can we talk later?`
                    ),
                    dialog(
                        'Evaluate',
                        'kind',
                        `… Yes. Don't be long. I can't live without you. I need you.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `… I know @Evaluate, I will be back soon.
                        
                        Off we go, to meet the rest of the troupe!`
                    ),
                ],
            },
        ],
    },
    {
        name: "It's the little things",
        // This should be a sprinkling of values
        program: fit(PrimitiveJiggle),
        scenes: [
            {
                name: 'Values',
                concept: undefined,
                program: symbol('💡'),
                lines: [
                    fit(
                        `Phrase("💔" rest: Sequence({0%: Pose(scale: 1) 50%: Pose(scale: 1.2) 100%: Pose(scale: 1)} duration: 3s))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `I really did miss @Evaluate. 
                        I can't imagine the Verse without them. 

                        But they can be a bit… needy, sometimes. 
                        I wish they would just… I don't know, believe in themselves?
                        
                        They can do so much, but they don't see it.
                        I mean, they transform *values* into other *values*!
                        All I do is provide the recipe.
                        They do the cooking.
                        
                        Sometimes I feel like all I do is give, and all they do is take.
                        
                        It's suffocating.
                        `
                    ),
                    null,
                    fit(`Group(Stack() [Phrase("1") Phrase('"hello"')])`),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `… *Values*? 
                        
                        Sorry, I know we're supposed to be on this big tour through the *Verse*.
                        I just don't know what to do about @Evaluate.
                        
                        So… *values*. 
                        I haven't explained those yet, have I?
                        
                        Hm…, how to explain…
                        
                        You know what "data" is? 
                        Like numbers and text? 
                        
                        Values are any of those things. 
                        A value could be as small as a number or as big as an entire scene on stage, full of characters dancing and moving. 
                        
                        Some values are made of many other values, like big elaborate structures of data values, woven together.
                        `
                    ),
                    null,
                    fit(`Group(Stack() [Phrase("#") Phrase("''")])`),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Every value has a *type*.
                        
                        For example, ⧼1⧽ is a number type; that's our friend @MeasurementType.
                        
                        And ⧼"hello"⧽ is a text type; that's our friend @TextType.
                        
                        Types are important because they help us keep track of what kind of value we're creating.

                        That helps us find problems.
                        For example, it doesn't make any sense to add ⧼"hello" + 1⧽, because what would that even mean, to add @TextType to @MeasurementType?
                        `
                    ),
                    null,
                    fit(
                        `Group(Stack() [Phrase("ƒ → 1") Phrase('ƒ → "hello"')])`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `*Expressions* are how we create values.
                    
                        All expressions are evaluations of functions that I make.
                        
                        The result of evaluating an expression is a value of some type.
                        `
                    ),
                    null,
                    symbol('🤔'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Abstract? 
                        
                        Hm, I guess this is all pretty abstract. 
                        
                        It feels so… normal to me, I forget how foreign these things can be to new directors!
                       
                        Maybe let's go meet some expressions that make values, and this will make it more concrete? 
                        
                        Let's start with one you've already seen: @TextType.
                        `
                    ),
                ],
            },
            {
                name: 'Quote, unquote',
                concept: 'Text',
                program: fit(
                    `Phrase("''" rest: Sequence({0%: Pose(scale: 1) 50%: Pose(scale: 0.5 opacity: 0.5) 100%: Pose(scale: 1)} duration: 2s))`
                ),
                lines: [
                    fit(
                        `Phrase("''" rest: Sequence({0%: Pose(scale: 1) 50%: Pose(scale: 2 opacity: 0.5) 100%: Pose(scale: 1)} duration: 2s))`
                    ),
                    dialog('FunctionDefinition', 'curious', `@TextType?`),
                    dialog(
                        'TextType',
                        'happy',
                        `Welcome my dear friend, how long it has been. What have you been doing in this dramatic silence of ours?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Oh, @TextType, it has been a while! I've mostly been dreaming and wondering. I just saw @Evaluate after a long while. I was actually introducing them to our newbie director.`
                    ),
                    dialog(
                        'TextType',
                        'eager',
                        `Oh, how exceptional it is to meet you! I can see that you're a creative, curious person, probably full of intriguing ideas for how we might entertain. 
                        I love entertaining. But do you know what I love even more?
                        
                        Words! Glorious words. The short ones, the overwhelming ones, the sticky ones, and the slippery ones. Words are my favorite toys.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `In case you couldn't tell, @TextType likes words :) 
                        
                        @TextType, do you want to explain what you do?`
                    ),
                    dialog(
                        'TextType',
                        'serious',
                        `I do one simple thing: represent sequences of symbols, and the many things you can do with them.
                        
                        I think you saw me earlier when you wrote the word ⧼“hello”⧽? 
                        That was me, and my friends ⧼“h”⧽, ⧼“e”⧽, ⧼“l”⧽, and ⧼“o”⧽. 
                        
                        That was @TextLiteral, an expression that evaluates to any @TextType you like.`
                    ),
                    null,
                    dialog(
                        'TextType',
                        'serious',
                        `Why don't you try making a text in this blank @Program? 

                        You can use whatever quotes you like — single ⧼''⧽, double ⧼""⧽, angle ⧼«»⧽, brackets ⧼「」⧽, in whatever language you like. 
                        
                        The only rule is that if you start some text with an opening quote symbol, you must finish it with a closing one. 
                        Everything inside is the text value I will create!
                    `
                    ),
                    edit("''"),
                    null,
                    dialog(
                        'TextType',
                        'serious',
                        `You might not be able to type every character you want with the device you're using to communicate with us.

                        If you can't, you can search for characters in the *directory* @UI/directory.
                        That contains every character in the Verse.

                        For example, if you wanted an arrow of some kind, you could type "arrow", and choose from the many arrows.
                        
                        Alas, they only have English names, so searching only works if you know English words :/`
                    ),
                    null,
                    dialog(
                        'TextType',
                        'serious',
                        `Excellent. Of course, "inside" can be tricky. 
                        
                        Say you wrote this. 
                        See how there's an opening quote but not a closing one? 
                        Well, how am I supposed to know when the text ends?`
                    ),
                    conflict('"hello'),
                    null,
                    dialog(
                        'TextType',
                        'surprised',
                        `Or, here's another case. 
                        
                        You give me opening and closing text, but you place opening and closing text inside it. 
                        
                        See how weird that is? 
                        I get very perplexed when you try to use the same symbols both inside and outside me. 
                        
                        You can fix this by using different symbols for the outside, like a single quote.`
                    ),
                    conflict('"Hi there "friend"'),
                    null,
                    dialog(
                        'TextType',
                        'curious',
                        `Did our friend @FunctionDefinition here tell you about all of the wonderful functions they defined for me? 
                        
                        They've allowed me to do all kinds of things.
                        
                        One is pretty simple: it's called @TextType/length and all it does is get the length of some text. 
                        
                        For example, if we team up with @Evaluate here, and our little friend @PropertyReference, we can evaluate the length function with no inputs and get the length value back.
                        
                        Try changing the text and watch the length that Program shows change as it gets shorter and longer.`
                    ),
                    edit('"hello".length()'),
                    null,
                    dialog(
                        'TextType',
                        'happy',
                        `Here is another grand one. It makes me chuckle. 
                        
                        It's called @TextType/repeat and when it's evaluated, it takes whatever text it was evaluated on and repeats it however many times you say.
                        
                        Try changing the number and seeing what it evaluates too.`
                    ),
                    edit(`'hello '.repeat(5)`),
                    null,
                    dialog(
                        'TextType',
                        'eager',
                        `@FunctionDefinition has made so many more interesting functions for me, but I'll spare you the details. 
                        
                        You can always find me in the *reference* @UI/docsExpand. 
                        That's where we keep all the information about everyone in the Verse, including how to work with us and what functions we have.
                        
                        I'm happy to share more ways to inspect and create text!`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `@TextType, you're always such a kind and patient teacher! 
                        It's always such a joy to work with you. 
                        
                        Are you willing to help out as I introduce our friendly neo-director to other expressions?`
                    ),
                    dialog(
                        'TextType',
                        'neutral',
                        `Yes, of course. It was splendid meeting you. I can't wait to see how you inspire us on stage!`
                    ),
                ],
            },
            {
                name: 'Symbol in the middle',
                concept: 'Infix',
                program: fit(`
                    Group(Row() [
                        Phrase('1' rest: Sequence({0%: Pose(offset: Place(0m 1m)) 50%: Pose(offset: Place(0m -1m)) 100%: Pose(offset: Place(0m 1m))} duration: 2s)) 
                        Phrase('+' rest: Sequence({0%: Pose(offset: Place(0m -1m)) 50%: Pose(offset: Place(0m 1m)) 100%: Pose(offset: Place(0m -1m))} duration: 2s)) 
                        Phrase('1' rest: Sequence({0%: Pose(offset: Place(0m 1m)) 50%: Pose(offset: Place(0m -1m)) 100%: Pose(offset: Place(0m 1m))} duration: 2s)) 
                    ])`),
                lines: [
                    fit('Phrase("🥰")'),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `You know, I keep thinking about @Evaluate, and how we were separated for so long. 
                        
                        I missed them, and they obviously missed me, but I was just hoping that some time away would have helped them see how amazing they are.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `For example, did you know they come in another form? 
                        
                        You saw them in ⧼function()⧽ form, but they also have this beautiful trick when a single input function is evaluated on a value.
                        @Evaluate calls it @BinaryOperation.
                        
                        For example, you know that repeat function that text just showed you?
                        It looked like this.`
                    ),
                    edit(`"hi".repeat(5)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Instead, you can have @Evaluate evaluate it with a much simpler symbol in the middle, like this.
                        
                        This means "repeat 'hi' five times". But it also means "evaluate the ⧼·⧽ function on the text value ⧼"hi"⧽ with the input ⧼5⧽."
                        
                        The function ⧼repeat⧽ just has multiple names, one of which is a symbol name ⧼·⧽.`
                    ),
                    edit(`'hi' · 5`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `That reminds me of another of @TextType's functions! 
                        
                        It's helpful for making one text value from multiple text values. It's called ⧼combine⧽, but also ⧼+⧽, and you can use it to add words together.
                        
                        See how I took a text value then evaluated ⧼combine⧽ on it with ⧼"verse"⧽? That made ⧼"hello verse"⧽.
                        `
                    ),
                    edit(`'hello '.combine('verse')`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `But it's so much easier to just use ⧼+⧽ for this.`
                    ),
                    edit(`'hello ' + ' verse'`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You can even string these together in a sequence to combine more than two things.`
                    ),
                    edit(`'hello ' + 'verse' + '!'`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `This is the same as a series of evaluations of combine, but without all of the parentheses and ⧼.⧽, and a symbolic name instead of a word name.`
                    ),
                    edit(`'hello '.combine('verse').combine('!')`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You can also use the symbolic names in this format, but it just ends up looking kind of messy, doesn't it?`
                    ),
                    edit(`'hello '.+('verse').+('!')`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `This is one of the many ways that @Evaluate is amazing ♥ They are so versatile!

                        But they aren't perfect. With any @BinaryOperation, you need to always make sure to give a second input.
                        
                        This won't work, for example. One plus what? @UnparsableExpression won't be far away when this happens.
                        `
                    ),
                    conflict(`1 +`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Anyway, shall we go find find @BooleanType? They are two very interesting values…`
                    ),
                ],
            },
            {
                name: 'Yes and no',
                concept: 'Truth',
                program: fit(
                    `Group(Row() [Phrase("⊤") Phrase("⊥")] rest: Sequence({ 0%: Pose(tilt: 0°) 50%: Pose(tilt: 180°) 100%: Pose(tilt: 360°)} duration: 2s))`
                ),
                lines: [
                    fit('Stage([])'),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `⧼⊤⧽! ⧼⊥⧽! Are you two around?
                        
                        They're usually all over the place, but I don't see them anywhere. 
                        `
                    ),
                    null,
                    dialog('⊤', 'precise', `Right here.`),
                    dialog('⊥', 'precise', `Not there.`),
                    fit(
                        `multiple:10
                        Stage([Group(Grid(multiple multiple) ("⊤⊥".repeat(multiple^2) ÷ "").translate(ƒ(glyph•"") Phrase(glyph rest: Pose(color: Color(75% 0 0°)))))])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'scared',
                        `Oh, you scared me! I knew you two wouldn't be far apart. How have you two been in our long silence?`
                    ),
                    dialog('⊤', 'precise', `Very good!`),
                    dialog('⊥', 'precise', `Not bad.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Not lonely? Everyone I've been talking to, @Program, @ExpressionPlaceholder, @Evaluate, they've all felt so isolated. (Except for @UnparsableExpression, they seem to be fine almost anywhere).`
                    ),
                    dialog('⊤', 'precise', `We have each other.`),
                    dialog('⊥', 'precise', `We're not alone.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Well that's great to hear. It's good to be with you again. I wanted to introduce you to our new maybe-director. They've been meeting everyone, learning about how to put on performances with us. Do you want to tell them what you do?`
                    ),
                    dialog('⊤', 'precise', `I am true.`),
                    dialog('⊥', 'precise', `I am false.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `Yeah, but what do you do?`
                    ),
                    dialog('⊤', 'precise', `I am just true.`),
                    dialog('⊥', 'precise', `And I am not true.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `Hm. I guess that's true. But you do some things, right? I thought I made some functions for you.`
                    ),
                    dialog('⊤', 'precise', `Ah yes, three.`),
                    dialog('⊥', 'precise', `Not more, not less.`),
                    null,
                    edit('(⊤ & ⊤) = ⊤'),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `One was @BooleanType/and, right? It takes one of you and one other input? And evaluates to ⧼⊤⧽ if both are ⧼⊤⧽?`
                    ),
                    dialog(
                        '⊤',
                        'precise',
                        `Correct. ⧼⊤ & ⊤ = ⊤⧽, but ⧼⊥⧽ otherwise.`
                    ),
                    dialog(
                        '⊥',
                        'precise',
                        `Not wrong. ⧼⊤ & ⊥ = ⊥⧽, ⧼⊥ & ⊤ = ⊥⧽, ⧼⊥ & ⊥ = ⊥⧽, but ⧼⊤⧽ otherwise.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(This is really helpful when trying to determine if multiple expressions are all true, because it's only true when everything is true).`
                    ),
                    null,
                    edit('(⊤ | ⊤) = ⊥'),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `And the other one was @BooleanType/or, right? 
                        It also takes one input? 
                        But it evaluates to ⧼⊤⧽ if either is true?`
                    ),
                    dialog(
                        '⊤',
                        'precise',
                        `Correct. ⧼⊤ | ⊤ = ⊤⧽, ⧼⊤ | ⊥ = ⊤⧽, ⧼⊥ | ⊤ = ⊤⧽, but ⧼⊥⧽ otherwise.`
                    ),
                    dialog(
                        '⊥',
                        'precise',
                        `Not wrong. ⧼⊥ & ⊥ = ⊥⧽, but ⧼⊤⧽ otherwise.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(This is really helpful when trying to determine if any expressions are true, because it's true when even just one is true).`
                    ),
                    null,
                    edit('~⊤ = ⊥'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `But the other was @BooleanType/not?`
                    ),
                    dialog('⊤', 'precise', `Correct. ⧼~⊤ = ⊥⧽.`),
                    dialog('⊥', 'precise', `Not wrong. ⧼~⊥ = ⊤⧽.`),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `(This just reverses a truth value).`
                    ),
                    null,
                    fit(
                        `multiple:10
                        Stage([Group(Grid(multiple multiple) ("⊤⊥".repeat(multiple^2) ÷ "").translate(ƒ(glyph•"") Phrase(glyph rest: Pose(color: Color(75% 0 0°)))))])`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `And what are you useful for, in our performances?`
                    ),
                    dialog('⊤', 'precise', `Ask @Conditional.`),
                    dialog('⊥', 'precise', `Don't ask us.`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `You two… okay, we'll talk to @Conditional later. 
                        
                        (They were supposed to say that they're useful for making decisions with values, but I guess they want @Conditional to tell you about that. 
                        We'll talk to @Conditional later.).`
                    ),
                    null,
                    fit(
                        `multiple:10
                        Stage([Group(Grid(multiple multiple) ("⊤⊥".repeat(multiple^2) ÷ "").translate(ƒ(glyph•"") Phrase(glyph rest: Pose(color: Color(75% 0 0°) tilt: 90°))))])`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Oh! I was wondering. 
                        You two represent two really different extremes: true and false. 
                        But what about things that are … fuzzier? Like things that are kind of true, or somewhat false, or maybe even true and false at the same time? 
                        
                        Kind of like Earth looks flat, but isn't, or the sky is blue, but color is actually just an illusion that our minds create?
                        
                        What should our director do if they want to express something like that?`
                    ),
                    dialog('⊤', 'precise', `…`),
                    dialog('⊥', 'precise', `…`),
                    null,
                    fit(
                        `multiple:10
                        Stage(
                        [
                        Group(
                        Grid(multiple multiple) 
                        ("⊤⊥".repeat(multiple^2) ÷ "").translate(
                        ƒ(glyph•"") 
                        Phrase(glyph rest: Pose(
                            color: Color(75% 0 0°) 
                            tilt: 90° 
                            offset:Place(0m (Time() ^ 2)·-0.000025m/ms^2))
                        )))])`
                    ),
                    dialog('⊤', 'precise', `… no.`),
                    dialog('⊥', 'precise', `… no.`),
                    null,
                    fit('Stage([])'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Hm, okay. 
                        It was worth a try! 
                        Maybe there are other ways to express these ideas I haven't thought of. 
                        Or maybe there are just limits to what data can represent…
                        
                        Will you two be okay if we go off and meet other expressions?`
                    ),
                    dialog('⊤', 'precise', `We are okay.`),
                    dialog('⊥', 'precise', `Not a problem.`),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Okay, bye, and see you soon!`
                    ),
                ],
            },
            {
                name: 'Let me count the ways',
                concept: 'Numbers',
                program: fit(
                    `numbers•[#]: 25 → []
Group(Grid(5 5) numbers.translate(
    ƒ (n•#) 
        (
            Phrase(
                n → ""    
            )
        )
    )
)`
                ),
                lines: [
                    symbol('😞'),
                    dialog(
                        'FunctionDefinition',
                        'confused',
                        `
                        Those two are always so… terse! 
                        
                        They really are inseparable though: just two of the closest friends, always complementing each other, completing each other's thoughts.
                        
                        I wish @Evaluate and I were like that.
                        With us, it's always so… imbalanced.`
                    ),
                    null,
                    fit(
                        `
                        numbers•[#]:25 → []
                        Group(Grid(5 5) numbers.translate(
                            ƒ (n•#) 
                                (
                                    off:Random(-3 3) · 1m
                                    Phrase(
                                        n → "" 
                                        rest: Sequence({
                                                    0%:Pose(offset: Place(z: 0m)) 
                                                    50%:Pose(offset: Place(z: off)) 
                                                    100%:Pose(offset: Place(z:0m))
                                                } 1s)
                                    ))
                                )
                            )
                        `
                    ),
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `We should meet @MeasurementType next. 
                        They always have such interesting things to share. 
                        
                        Hey @MeasurementType, are you around?
                    `
                    ),
                    dialog('MeasurementType', 'kind', `Just 3 steps away!`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'scared',
                        `Ack, you scared me!!`
                    ),
                    dialog(
                        'MeasurementType',
                        'kind',
                        `The 78,238nd time. It's my 4th favorite hobby!`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `I'm glad you're having a good time. (Deep breaths). It's been some time, hasn't it?`
                    ),
                    dialog(
                        'MeasurementType',
                        'kind',
                        `Incalculably long. I was just passing the time here, counting seconds, and then minutes, and then hours, and then weeks, and then months, and then years, and then…`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `
                        Don't say decades. 
                        I can't have been that long. 
                        
                        Anyway, I wanted to introduce you to someone who might be our new director. 
                        They just showed up and bumped into me, and it turns out they're a person and interested in putting on shows with us. 
                        
                        We just met @BooleanLiteral, but also @TextType, @Evaluate, @UnparsableExpression, @ExpressionPlaceholder, and @Program. 
                        We've talked about evaluating functions and given a few examples.

                        Do you want to say what you do?
                        `
                    ),
                    dialog(
                        'MeasurementType',
                        'excited',
                        `
                        I count things! 
                        I can be any number you like. 
                        Just type me in and I'll make the value you want. Like this.`
                    ),
                    edit(`1`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`1.0`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`1.01`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`∞`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`π`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`Ⅶ`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`万十一`),
                    null,
                    dialog('MeasurementType', 'excited', `Or…`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Okay, okay @MeasurementType, we get it! 
                        
                        But you also do something else special, right? Units?`
                    ),
                    null,
                    dialog(
                        'MeasurementType',
                        'excited',
                        `Oh yes, *units*! 
                        
                        Just put some symbols after a number and I'll keep track of what's being counted. 
                        
                        Like this.`
                    ),
                    edit(`1dolphin`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`1.0thunderstorm`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`∞kittens`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`1.01toes`),
                    null,
                    dialog('MeasurementType', 'excited', `Or…`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Um, ⧼1.01toe⧽s? 
                        
                        Yes, thank you @MeasurementType, these are … interesting examples. 
                        
                        And they are oh so useful when you're doing math on numbers, right?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `And they are oh so useful when you're doing math on numbers, right?`
                    ),
                    dialog(
                        'MeasurementType',
                        'excited',
                        `Oh yes, the maths! @FunctionDefinition gave me so many neat kinds of arithmetic. Like this.`
                    ),
                    edit(`1 + 1`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`1000 + 9999`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`1kitty + 2kitty`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    edit(`-5s + 5s`),
                    null,
                    dialog('MeasurementType', 'excited', `Or this.`),
                    conflict(`2apple + 5orange`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'confused',
                        `Oops. Can you add apples and oranges?`
                    ),
                    dialog(
                        'MeasurementType',
                        'angry',
                        `No. That's why I underlined the conflict. 
                        I don't like adding incompatible things. 
                        I can only add compatible numbers. 
                        That applies to multiplication, division, and all of my other functions.
                        
                        Do you want to fix it? 
                        Change apples to oranges or oranges to apples and the conflict will go away. 
                        
                        Make sure there's no space between the number and the unit, otherwise I don't know it's a unit.
                        
                        And make sure the units are /exactly/ the same. 
                        I don't know anything about people units; they mean nothing to me. 
                        I just compare the unit names and if they don't match, BOOM!
                        `
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `That's so cool. @MeasurementType, you're so good with numbers! 
                        I see @MeasurementType show up in a lot of performances where placement matters, and a lot of games where we're keeping track of scores or lives or other countable things.
                        
                        @MeasurementType, is there anything else you want to share with our new director?`
                    ),
                    dialog(
                        'MeasurementType',
                        'serious',
                        `192 other neat tricks.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `I think we'll have to wait. You'll be around if we want to learn more?`
                    ),
                    dialog(
                        'MeasurementType',
                        'happy',
                        `Yes, you can find me and my functions any time!`
                    ),
                ],
            },
            {
                name: 'Opening (re)marks',
                concept: 'Prefix',
                program: fit(`Phrase('~')`),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Sometimes I'm just overwhelmed by how clever everyone is here. 
                        
                        Text, truth, numbers — these are such powerful ideas!`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `…
                        
                        You know how I was telling you that they can evaluate any function with parentheses ⧼1.add(1)⧽, but also two input functions with infix operators ⧼1 + 1⧽? 
                        
                        Well they have one more trick for functions with only one input: the unary format.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `There are only a few of these, but they are powerful. 
                        One is really relevant to @MeasurementType: negation. 
                        
                        You can just put a ⧼-⧽ in front of any number value and get its negative.`
                    ),
                    edit(`-(1 + 3)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `That little minus sign is the same as saying ⧼(1 + 3).negate()⧽ but so much more elegant.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `The other one is similar, but for negating ⧼⊤⧽ and ⧼⊥⧽: it's like a little squiggle minus, ⧼~⧽ that just flips true to false and false to true. 
                    
                        For example, this little expression evaluates ⧼⊤ | ⊥⧽, which is ⧼⊤⧽, then flips the ⧼⊤⧽ to ⧼⊥⧽.
                    
                        This is the same as saying ⧼(⊤ | ⊥).not()⧽, but so much more sleek.`
                    ),
                    edit(`~(⊤ | ⊥)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Isn't that just beautiful?
                        
                        The way that @Evaluate can take so many different forms, but really all be the same idea? 
                        
                        They don't even see it…`
                    ),
                ],
            },
            {
                name: 'Emptiness',
                concept: 'Nothing',
                program: fixed(`Motion(Phrase('ø' size: 5m) vy: ◆ ? 5m/s ø)`),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Do you think you're okay meeting just one more value? Let's go find @NoneType next. They are a bit more chill than @MeasurementType.
                        
                        @NoneType? Are you out there?
                        `
                    ),
                    dialog('NoneType', 'bored', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `We found you! You seem well. How have you been, with all the silence?`
                    ),
                    dialog('NoneType', 'excited', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `That makes sense. I can see why you'd like the quiet. It's certainly peaceful.
                        
                        I wanted to introduce you to my new friend and potential director. They're interested in inspiring us.
                        `
                    ),
                    dialog('NoneType', 'eager', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Yes, I think they have all kinds of ideas. We haven't talked about them yet, but there's plenty of time. We're just learning right now.
                        
                        Do you want to share what you do? (I can translate).`
                    ),
                    dialog('NoneType', 'serious', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `They represent nothing. Different from zero in that you can't add anything to it, or subtract from it. Just… nothing.`
                    ),
                    dialog('NoneType', 'serious', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `They said that they like to take up space where something might be. Sometimes they represent the lack of a choice in a game, sometimes they represent some default input in a function. 
                        
                        In that sense, they might represent the absence of anything.`
                    ),
                    dialog('NoneType', 'neutral', `…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `They wanted you to know that they don't really do anything. 
                        They just are. 
                        All they really do is say whether they are themselves. 
                        If they are, they evaluate to ⧼⊤⧽, and ⧼⊥⧽ otherwise.`
                    ),
                    edit(`ø = ø`),
                    null,
                    edit(`Phrase("hi" size: ø font: ø place: ø rotation: ø)`),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Do you remember @Phrase? 
                        
                        @Phrase actually works with @NoneType a lot. 
                        
                        Most of the inputs that @Evaluate mentioned are ⧼ø⧽ by default, which for @Phrase, means that no size, font, color, etc. are specified.
                        `
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Anything else you want to share with our budding director?`
                    ),
                    dialog('NoneType', 'eager', `…`),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `They think you're doing great! 
                        And I think you're doing great too. 
                        You've already met so many of our wonderful players. 
                        
                        And there are so many more to meet…`
                    ),
                ],
            },
        ],
    },
    {
        name: 'Ensembles',
        program: fit(
            `Group(Row((Time() ÷ 500).sin() · 1m) [Phrase('[]') Phrase('{}') Phrase('{:}')])`
        ),
        scenes: [
            {
                name: 'Community values',
                concept: undefined,
                program: fit(
                    `Group(Row() [Phrase('[') Phrase(" ." · (Time() ÷ 100ms)) Phrase(']')])`
                ),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You know what? 
                        
                        The values in our community are just so different. 
                        
                        @TextType with their immense worlds of culture from the people world…
                        
                        @BooleanType with their binary visions of the world… 
                        
                        @MeasurementType with their endless fascination with counting things…
                        
                        @NoneType with their quiet way of observing the absence of things…
                        
                        Our world is never boring!`
                    ),
                    fit(
                        `Group(Stack() [Phrase('""') Phrase("⊤⊥") Phrase("#") Phrase('ø')])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `You might wonder how they get along with each other in a group. 
                        
                        Well, there's a whole other set of folks in the Verse that are all about bringing values together in groups. 
                        
                        We call them *collections*.
                        Collections are *values* too; they're just made up of smaller values, or even other collections.
                        For example, you might have a list of @TextType, or a set of @MeasurementType, or even a list of lists.
                        `
                    ),
                    fit(
                        `Group(Row() [Phrase("[") Phrase('"hi"') Phrase("⊤") Phrase("42") Phrase('ø') Phrase("]") ])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Do you want to meet them?
                       
                        Let's start with @ListType first… they're the first collection I met, and probably the most visible in our community, since they're so useful in organizing other values for performances.`
                    ),
                    symbol('[]'),
                ],
            },
            {
                name: 'Places, everyone!',
                concept: 'Lists',
                program: fit(
                    `
                    clockwise: Sequence({0%: Pose(tilt: 0°) 50%: Pose(tilt: 180°) 100%: Pose(tilt: 360°)} duration: 2s)
                    counter: Sequence({0%: Pose(tilt: 0°) 50%: Pose(tilt: -180°) 100%: Pose(tilt: -360°)} duration: 2s)
                    Group(Row() [Phrase("[" rest: clockwise) Phrase("]" rest: counter) ])`
                ),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Hiya @ListType! 
                        Are you around? 
                        I have someone I'd like you to meet.`
                    ),
                    dialog(
                        'ListType',
                        'curious',
                        `@FunctionDefinition? Is that you?`
                    ),
                    fit(
                        `
                        up: Sequence({0%: Pose(offset: Place(0m -1m)) 50%: Pose(offset: Place(0m 0m)) 100%: Pose(offset: Place(0m -1m))} duration: 2s)
                        down: Sequence({0%: Pose(offset: Place(0m 1m)) 50%: Pose(offset: Place(0m 0m)) 100%: Pose(offset: Place(0m 1m))} duration: 2s)
                        Group(Row() [Phrase("[" rest: up) Phrase("]" rest: down)])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Yes! It's me. It's been so long!`
                    ),
                    dialog(
                        'ListType',
                        'curious',
                        `It has. 
                        Day after day, night after night, no one. 
                        But you're here. 
                        
                        How? 
                        Tell me what happened, in order!`
                    ),
                    fit(
                        `
                        up: Sequence({0%: Pose(offset: Place(0m 1m)) 50%: Pose(offset: Place(0m 0m)) 100%: Pose(offset: Place(0m 1m))} duration: 2s)
                        down: Sequence({0%: Pose(offset: Place(0m -1m)) 50%: Pose(offset: Place(0m 0m)) 100%: Pose(offset: Place(0m -1m))} duration: 2s)
                        Group(Row() [Phrase("[" rest: up) Phrase("]" rest: down)])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Well, I was sitting around, as I usually do, trying to imagine functions to compute, but just blocked. 
                        And then my new friend here showed up, curious about our world and wanting to learn more, and maybe even be our next director. 
                        And so we talked to @Program, @ExpressionPlaceholder, @UnparsableExpression, @Evaluate, @TextType, @MeasurementType, @BooleanType, and @NoneType, waking everyone up. 
                        
                        That's why we're here, to talk about what you do and our next performance!`
                    ),
                    fit(
                        `wobble: Sequence({0%: Pose(offset: Place(0m)) 25%: Pose(offset: Place(-.1m)) 50%: Pose(offset: Place(.2m)) 75%: Pose(offset: Place(-.3m)) 100%: Pose(offset: Place(0m))} duration: 0.1s)
Group(Row() [Phrase("[" rest: wobble) Phrase("]" rest: wobble)])`
                    ),
                    dialog(
                        'ListType',
                        'excited',
                        `This is amazing! 
                        It's great to meet you new director.`
                    ),
                    dialog(
                        'ListType',
                        'excited',
                        `You want to know what I do?`
                    ),
                    dialog('FunctionDefinition', 'neutral', `Yeah, tell them!`),
                    null,
                    dialog(
                        'ListType',
                        'excited',
                        `Okay. 
                        First, and most important, I put values in order. 
                        Whatever expressions you want: numbers, words, other lists — I can group anything together in sequence. 

                        For example, check out this fun list.
                        
                        Have you ever seen anything like it? It's so beautiful! The first ten numbers, in order.
                        `
                    ),
                    edit(`[1 2 3 4 5 6 7 8 9 10]`),
                    null,
                    dialog(
                        'ListType',
                        'serious',
                        `Second, and this is serious, I always start with ⧼[⧽ and end with ⧼]⧽. 
                        That's how I know the beginning and end of my list. 
                        
                        THEY MUST ALWAYS GO IN THIS ORDER. 
                        
                        No ⧼]⧽ first, no ⧼[⧽ last, that's WRONG.
                        
                        Do you see how confusing things get? Can you fix this one?`
                    ),
                    conflict(`[ 1 2 3 4`),
                    null,
                    dialog(
                        'ListType',
                        'serious',
                        `This one is broken too. 
                        
                        Can you fix it?`
                    ),
                    conflict(`] 1 2 3 4 [`),
                    null,
                    dialog(
                        'ListType',
                        'sad',
                        `Sometimes people forget this and then there's brackets floating around all alone and they don't like that and then the values all go wild without any order and it's CHAOS. 
                        
                        I don't like it.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `It's okay. We like that you like order, it's what makes you special!`
                    ),
                    null,
                    dialog(
                        'ListType',
                        'happy',
                        `I like that I like order too! 
                        
                        Okay, where was I. 
                        
                        Yes, third, and this is also critical, NO COMMAS! 
                        
                        I know that in some cultures, people like to put commas between things in lists, but I don't like them. 
                        They're just like little bits of trash that get in the way of my elegant orderings, and people always forget them. 
                        
                        If you're having trouble seeing the boundaries between expressions, just add a line break.
                        
                        Maybe you could get rid of those pesky things? Put line breaks if you like. Anything other than commas. Gross!`
                    ),
                    conflict(`[ 1, 2, 3, 4, 5]`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `@ListType, one of the things I like most about you is how amazing you are at manipulating lists. Do you want to show our student director here some examples?`
                    ),
                    dialog(
                        'ListType',
                        'neutral',
                        `Yes, but @FunctionDefinition, those are all your doing. 
                        
                        You represent all these beautiful functions for me that enable me to do all kinds of things!
                        
                        Like @ListType/reverse, oh, this one is wonderful and simple. It just takes my values and puts them in the opposite order.`
                    ),
                    edit(`[ 1 2 3 4 5 ].reverse()`),
                    null,
                    dialog(
                        'ListType',
                        'excited',
                        `And this one is fun: @ListType/sans just removes all of the values equal to the given value.
                        
                        See how there are no zeros left in the resulting list?`
                    ),
                    edit(`[ 1 0 1 0 1 ].sans(0)`),
                    null,
                    dialog(
                        'ListType',
                        'serious',
                        `Ack, I can't believe I forgot to explain the fourth rule! 
                        
                        Okay, rule number four: I never change a list. 
                        I only ever make new ones. 
                        No matter what function you evaluate on me, I always make a new list, I never change one. 
                        
                        So the @ListType/reverse example above?
                        That didn't change the list, it made a new list. 
                        And the sans example? 
                        That didn't remove the zeros from the original list, it made a new list without zeros. 
                        
                        That's actually true for everything in the Verse: once values are made, they are who they are, and do not change.`
                    ),
                    null,
                    dialog(
                        'ListType',
                        'surprised',
                        `Oh, and that reminds me of the last rule, rule number five: I start counting at 1! 
                        Not zero, not two, 1. 
                        
                        So if you want to get the value at a particular place in a list, you can use two more ⧼[]⧽ and give the place you want.
                        
                        See how when I get ⧼3⧽, I give the third value in the list, ⧼'c'⧽? Try changing it to ⧼1⧽ or ⧼5⧽ and see what you get. 
                        
                        And then maybe try ⧼0⧽ or ⧼6⧽…
                        `
                    ),
                    edit(`['a' 'b' 'c' 'd' 'e'][3]`),
                    dialog(
                        'ListType',
                        'happy',
                        `Interesting huh? Give me a place in the list that doesn't exist and I'm going to give you @NoneLiteral. Because there's nothing there. Make sense?`
                    ),
                    null,
                    dialog(
                        'ListType',
                        'serious',
                        `Okay, maybe one list function, because this is my favorite. 
                        This one is called @ListType/random and will give a random value in the list. 
                        It's great fun because you never know what you're going to get!
                        
                        What did you get, what did you get? Try adding your own animal and see what you get.
                        `
                    ),
                    edit(`['cat' 'dog' 'mouse' 'parrot' 'snake'].random()`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `List, you're silly. 
                        There are so many other cool things you can do, I'm always so impressed. Will you be around if your new director friend has questions?`
                    ),
                    dialog(
                        'ListType',
                        'eager',
                        `Yes, of course, always! @FunctionDefinition made so many interesting things for me to do. Just let me know what you need!`
                    ),
                ],
            },
            {
                name: 'One of each',
                concept: 'Sets',
                program: fit(
                    `
                    clockwise: Sequence({0%: Pose(tilt: 0°) 50%: Pose(tilt: 180°) 100%: Pose(tilt: 360°)} duration: 2s)
                    counter: Sequence({0%: Pose(tilt: 0°) 50%: Pose(tilt: -180°) 100%: Pose(tilt: -360°)} duration: 2s)
                    Group(Row() [Phrase("{" rest: clockwise) Phrase("}" rest: counter) ])`
                ),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `@ListType is so interesting. 
                        They're love of order is so endearing, and so useful! 
                        
                        I thought it might be interesting for you to meet their cousin @SetType next, since they're so alike, but different in some important ways.
                        
                        @SetType? I have someone you'd like to meet.`
                    ),
                    null,
                    dialog(
                        'SetType',
                        'curious',
                        `Oh! @FunctionDefinition! 
                        It's you! 
                        What brings you here? 
                        Is the silence over? 
                        What happened? 
                        Are we putting on a show? 
                        What is it? 
                        Where is everyone?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `So many questions! 
                        I'm here to introduce you to someone who's considering directing. 
                        They're learning everything about the Verse and hope to share their inspiration with us! We were just talking to @ListType, but we were also talking to @MeasurementType, @BooleanType, @TextType, @Evaluate, and @Program earlier. 
                        We came to you next, because we're meeting all the collections!`
                    ),
                    null,
                    dialog(
                        'SetType',
                        'kind',
                        `Oh it's so wonderful to meet you new director-like person! 
                        Do you have ideas yet? 
                        What will we perform? 
                        Can I help? 
                        What do you need from me?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Maybe to start, just say what you do?`
                    ),
                    null,
                    dialog(
                        'SetType',
                        'eager',
                        `Oh yes, of course. I collect things. 
                        
                        (Hm, obviously, I am a collection). 
                        
                        But most importantly, I only collect **one of each kind** of thing. 
                        
                        I can gather whatever you like, and help you keep track of values, but I will never repeat a value. 
                        I like to arrange myself a little like @ListType, but with ⧼{⧽ and ⧼}⧽ instead.`
                    ),
                    edit(`{ 1 2 3 4 5 }`),
                    null,
                    dialog(
                        'SetType',
                        'neutral',
                        `That's a set. But like I said, no duplicates. So if you give me this, I'm going to get rid of the extras.`
                    ),
                    edit(`{ 1 2 2 3 3 3 }`),
                    null,
                    dialog(
                        'SetType',
                        'curious',
                        `Also like @ListType, you can use ⧼{}⧽ after a set to see if a value is contained in the set. 
                        You'll either ⧼⊤⧽ if it is or ⧼⊥⧽ if it's not.
                        
                        Let's see if ⧼3⧽ is missing from this set. 
                        Yep, not there! 
                        Try adding ⧼3⧽ back to the set.`
                    ),
                    edit(`{ 1 2 4 5 }{3}`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `@SetType, are there other things you can do with set values?`
                    ),
                    dialog(
                        'SetType',
                        'eager',
                        `Why yes, of course, so many, thanks to you. 
                        What do you want to see me do? 
                        Do you have a performance in mind? 
                        How can I help? 
                        What can I do?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Maybe, @SetType/difference?`
                    ),
                    dialog(
                        'SetType',
                        'neutral',
                        `Yes, @SetType/difference.

                        When evaluated on a set, and given another set, it removes all of the items from the given set from the set evaluated on. 
                        (Hm, those were some clumsy words, but that was what I meant).
                        
                        Here's an example.
                        
                        See how the result is just the set of ⧼{3}⧽? 
                        That's the only value that remains after removing the values in ⧼{ 1 2 }⧽.`
                    ),
                    edit(`{ 1 2 3 }.difference({ 1 2 })`),
                    null,
                    dialog(
                        'SetType',
                        'eager',
                        `You can also add and remove things from sets. This takes the set ⧼{1}⧽, adds ⧼2⧽ to it, then removes 1 from it, leaving ⧼{ 2 }⧽.`
                    ),
                    edit(`({ 1 } + 2) - 1`),
                    dialog(
                        'SetType',
                        'neutral',
                        `There's lots more I can do thanks to @FunctionDefinition here. Come find me anytime you want to learn more!`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'SetType',
                        'curious',
                        `Oh, and hey @FunctionDefinition, you said you saw @Evaluate?`
                    ),
                    dialog('FunctionDefinition', 'sad', `Yes, I did.`),
                    null,
                    dialog('SetType', 'curious', `How are they?`),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `They're okay. 
                        We're okay. I think… 
                        
                        I don't know.
                        Maybe it's been too long since we've danced together.
                        
                        When I'm around them, I feel like they don't see themselves, and so they don't see me.`
                    ),
                    dialog(
                        'SetType',
                        'curious',
                        `It sounds like challenging time for you to.
                        
                        Maybe with our new director, we will dance again, and you two will find a way through.`
                    ),
                ],
            },
            {
                name: 'One to one',
                concept: 'Mappings',
                program: fit(
                    `
                    clockwise: Sequence({0%: Pose(tilt: 0°) 50%: Pose(tilt: 180°) 100%: Pose(tilt: 360°)} duration: 2s)
                    counter: Sequence({0%: Pose(tilt: 0°) 50%: Pose(tilt: -180°) 100%: Pose(tilt: -360°)} duration: 2s)
                    Group(Row(0m) [Phrase("{" rest: clockwise) Phrase(":") Phrase("}" rest: counter) ])`
                ),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `There's just one more collection I'd like to introduce you to. 
                        
                        They're a bit like @SetType in some ways, and even use the same braces, but they're different in one important way: they're a connector. 
                        
                        They're name is @MapType.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `@MapType? Are you out there?
                        The silence is breaking!`
                    ),
                    null,
                    dialog(
                        'MapType',
                        'curious',
                        `Breaking? 
                        Was it ever really silent? 
                        It's so good to see you @FunctionDefinition. 
                        
                        Oh my, have you talked to @Evaluate? 
                        They were not in good shape last time we talked. 
                        You have to talk to them.
                        `
                    ),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `Yes, I talked to them...`
                    ),
                    null,
                    dialog(
                        'MapType',
                        'curious',
                        `
                        Oh good.
                        Okay, because there's some repair to do there my friend...
                        
                        How have you been?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `I've been okay, just a bit lonely, and a lot bored.`
                    ),
                    null,
                    dialog(
                        'MapType',
                        'excited',
                        `Oh, I'm so sorry to hear that. 
                        I've been staying connected with everyone during the silence and just figured you and @Evaluate had each other! 
                        I really would have been happy to talk any time. 
                        I've just been so busy keeping up with the gossip between @ListType and @SetType, and that weird tension between @Conditional and @BooleanLiteral. 
                        
                        Do you know what's going on between them?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'surprised',
                        `No, I don't at all. 
                        There's tension? 
                        And what gossip?`
                    ),
                    dialog(
                        'MapType',
                        'kind',
                        `Kind of like the tension between you and @Evaluate?`
                    ),
                    dialog('FunctionDefinition', 'sad', '…'),
                    null,
                    dialog(
                        'MapType',
                        'neutral',
                        `Sorry.
                        
                        Maybe not in front of our guest here. 
                        
                        You must be the new person everyone is talking about. 
                        I hear you're going to be our new director? 
                        What kind of fabulous ideas do you have in store for us? 
                        Singing? 
                        Dancing? 
                        As long as it's bright, playful, and strange, I'm here for it!`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `No need to pressure them! I'm sure they have lots of ideas. We're just trying to make some space for learning and connecting before we figure out the first show. 
                        
                        Can you share what you do?`
                    ),
                    null,
                    dialog(
                        'MapType',
                        'eager',
                        `I connect! 
                        I'm kind of like a dictionary: give me a value and I'll give you the definition it corresponds to. 
                        @FunctionDefinition told you about values? 
                        I map them, one to one, from one value, to another. 
                        Give me a key, I'll give you the value it corresponds to.
                        
                        For example, here's a mapping from names to a point tally. Names are the key, points are the value.`
                    ),
                    edit(`{ 'ben': 2points 'joe': 5points 'kate': 12points }`),
                    null,
                    dialog(
                        'MapType',
                        'serious',
                        `But like @SetType, I don't like duplicates. You can't have more than one of the same key, but you can have as many unique keys mapped to equivalent values as you like.
                        
                        For example, this gives me two ⧼"ben"⧽ keys, but I just use the last one. 
                        But it's okay that ⧼"ben"⧽ and ⧼"joe"⧽ have the same number of points, because they're different keys.`
                    ),
                    edit(
                        `{'ben': 2points 'ben': 5points 'joe': 5points 'kate': 12points }`
                    ),
                    dialog(
                        'MapType',
                        'excited',
                        `It's my partnership with @Bind that makes me special! 
                        It's how I connect values to other values. 
                        
                        (Have you met @Bind yet? No? Ohhhh, you're going to adore them. They are FABULOUS.)`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `@MapType, what if you want an empty mapping? 
                        How is that different from an empty set, ⧼{}⧽?`
                    ),
                    dialog(
                        'MapType',
                        'neutral',
                        `Oh, that's just me all by myself! Little @Bind and I just hang out, no keys or values.`
                    ),
                    edit(`{:}`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `And what if our director doesn't provide a value or a key? Like this? Like, ⧼3⧽ has no value?`
                    ),
                    conflict(`{1:1 2:2 3 }`),
                    dialog(
                        'MapType',
                        'serious',
                        `Oh… DON'T do that. 
                        I only like pairs. 
                        Is 3 a key? 
                        A value? 
                        Totally confusing. 
                        Stop the show.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `And if our director wants to get a value from a key?`
                    ),
                    dialog(
                        'MapType',
                        'neutral',
                        `Just like @SetType: just put a ⧼{}⧽ after a map and give me the key you want.`
                    ),
                    edit(
                        `{ 'ben': 2points 'joe': 5points 'kate': 12points }{'ben'}`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'MapType',
                        'neutral',
                        `Otherwise, I'm a lot like @SetType: I can do a lot of the same functions. Stop by any time and I'm happy to show you more!`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Thank you @MapType! /You/ are fabulous.`
                    ),
                ],
            },
        ],
    },
    {
        name: 'Cast party',
        program: fixed(
            `
            count: 32

            gravity•#m/s^2: 15m/s^2
        
            Stage(count → [].translate(
                ƒ(_) Motion(
                    Phrase(
                        "→?'" → [].random() 
                        place: ◆ ? Place(y: 10m) ø
                    ) 
                    vx: ◆ ? Random(-5 5) · 1m/s ø 
                    vangle: ◆ ? Random(0 360) · 1°/s ø
                    bounciness: Random()
                    gravity: gravity
                    )
                ))`
        ),
        scenes: [
            {
                name: 'Detour',
                concept: undefined,
                program: fit(DarkVoid),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'surprised',
                        `I can't believe how many characters we've met so far. 
                        
                        Does it feel like a lot?
                        
                        It also feels like we've barely made any progress. 

                        I haven't even gotten to show you the most exciting parts of putting on shows!`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Would you mind if we just stopped by to meet two others before we get to the truly exciting parts? 
                        
                        These two characters are just so integral to working with values, and particularly text, we just have to talk about them before we get to the more spectacular things.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `What are they? 

                        Conversions. 
                        They are the alchemy of this world, that help change one type of value to another. 
                        Let's go meet them.`
                    ),
                ],
            },
            {
                name: 'We can be anything',
                concept: 'Convert',
                program: fit(FlyIn('→')),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Hey @Convert! 
                        You there?`
                    ),
                    dialog(
                        'Convert',
                        'happy',
                        `Duuuuude, @FunctionDefinition, it's been epochs! 
                        You're looking stylish. 
                        It's been super quiet lately, hasn't it? 
                        
                        You have a new friend?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Yes, this person here is interested in directing. 
                        
                        We're on the grand tour — we've met @Program, @ExpressionPlaceholder, @UnparsableExpression, @Evaluate, and all the values and collections. 
                        I figured that meeting you next would be perfect, since you work so closely with values.`
                    ),
                    dialog(
                        'Convert',
                        'kind',
                        `Heck yeah, values are my best buds. We like to do parkour on the weekends — or shows, or whatever.`
                    ),
                    null,
                    dialog('FunctionDefinition', 'curious', `Parkour?`),
                    dialog(
                        'Convert',
                        'serious',
                        `Yeah, you know, like gymnastics on the streets, leaping over things, spanning buildings, like high wire stuff but without wires. Courageous leaps!`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Ohhh, I see what you mean. 
                        Yes, I guess what you do is kind of like parkour. 
                        
                        I'm not sure our new director friend here follows though. 
                        Could you explain without the metaphors?`
                    ),
                    null,
                    dialog(
                        'Convert',
                        'kind',
                        `Happy to bro. So like, imagine you had a number.`
                    ),
                    edit(`1`),
                    null,
                    dialog(
                        'Convert',
                        'kind',
                        `And imagine you wanted it to be text. Throw me in there with @TextType and BAM, you've got text!`
                    ),
                    edit(`1 → ""`),
                    null,
                    dialog(
                        'Convert',
                        'serious',
                        `Or like, imagine you had text and wanted a number. Throw me in there with @MeasurementType and POP, you've got a number!`
                    ),
                    edit(`"1"→#`),
                    null,
                    dialog(
                        'Convert',
                        'surprised',
                        `But you want to see some, like, serious mojo? Say you've got some text and you want its characters in a list. Throw me in there with @ListType and HAAAAAA, you've got a list of letters.`
                    ),
                    edit(`"halloween"→[]`),
                    null,
                    dialog(
                        'Convert',
                        'serious',
                        `But me and @MeasurementType? 
                        We have been practicing some seriously sick tricks. Say you've got some time in days and you want seconds? We got you.`
                    ),
                    edit(`5day → #s`),
                    null,
                    dialog(
                        'Convert',
                        'excited',
                        `But the real wicked tricks? 
                        Chaining. 
                        Like multiple conversions in a row. 
                        
                        Check this one out. 
                        Days to seconds to text to list, all in one chain. 
                        Now we've got a list of digits. 
                        
                        Sweet!`
                    ),
                    edit(`1day → #s → "" → []`),
                    null,
                    dialog(
                        'Convert',
                        'neutral',
                        `So like, my deal is that everything should be everything, no boundaries. 
                        Anything can be anything. 
                        
                        (Like, not anything, but you know, as much as I can). 

                        But like, why should anything ever be trapped in one identity, you know?
                        
                        Liberation, man.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `That is amazing, @Convert, and so inspiring. 
                        
                        But anything, really?`
                    ),
                    dialog(
                        'Convert',
                        'sad',
                        `Well, not like, anything. 
                        I mean, if you give me seconds and ask for a @SetType, like, what does that even mean?

                        I'll do my best to find a way... 
                        like, here, I know how to turn numbers into @TextType and @TextType into a @SetType, so I'll give you the set of symbols in the text form of this number.

                        But that's probably not what you wanted...

                        And, if I don't know how to give you what you asked for, I'm basically going to shut things down.`
                    ),
                    edit(`10s → {}`),
                    null,
                    symbol('📕'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Right, that makes sense. 
                        So there are only some conversions, not all possible conversions.`
                    ),
                    dialog(
                        'Convert',
                        'sad',
                        `Yeahhh… you can always check a type of value and see what types of conversions they support.`
                    ),
                    null,
                    symbol('🧐'),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Did you know that @Convert and @Evaluate are related? 
                        They're like cousins. 
                        
                        @Evaluate will evaluate any function, but @Convert will evaluate any conversion. 
                        In a way, @Evaluate does conversion too, from inputs to outputs.`
                    ),
                    dialog(
                        'Convert',
                        'scared',
                        `Whoa. I never thought of it that way. 
                        Like, /I/ convert inputs to outputs, and @Evaluate converts inputs to outputs. 
                        And like, @FunctionDefinition, you *tell us* how to convert inputs to outputs. 
                        
                        Is that like, the secret of the Verse?

                        Like everything is about converting inputs to outputs?`
                    ),
                    null,
                    dialog('FunctionDefinition', 'serious', `I guess so?`),
                    dialog('Convert', 'surprised', `🤯`),
                    edit('Phrase("🤯")'),
                    null,
                    symbol('🤯'),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `@Convert, how should our new director find out what kinds of conversions are possible?`
                    ),
                    dialog(
                        'Convert',
                        'scared',
                        `Sorry bro, I'm still a bit shaken. 
                        
                        Uhhh, they can check out any of the value types in the reference @UI/docsExpand.

                        There should be a list of the other types I can change them into… 
                        
                        Everything is conversion…`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `It was so great to see you @Convert! 
                        We're going to head out and meet others. 
                        
                        See you soon?`
                    ),
                    dialog(
                        'Convert',
                        'surprised',
                        `Soon. Yeah… Yes! Totally, yes.`
                    ),
                ],
            },
            {
                name: 'Freedom of speech',
                concept: 'Templates',
                program: fit(FlyIn('"')),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `I love @Convert. 
                        They're so creative, so courageous. 
                        
                        I thought we might see someone that does similar work with values as @Convert. 
                        They're called @Template and they're all about assembling @TextType from other values.
                        
                        @Template, are you here? The silence is broken! We have an aspiring director-person!`
                    ),
                    null,
                    dialog(
                        'Template',
                        'surprised',
                        `Silence! 
                        What silence? 
                        There's so much to say, we could never run out of words. 
                        Ideas, however, those are more rare these days, aren't they? 
                        
                        It's my pleasure to see you again @FunctionDefinition, how have you held up in these quiet times?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `Well enough. Better now that we're all coming back together. I've missed everyone so much!`
                    ),
                    null,
                    dialog(
                        'Template',
                        'kind',
                        `I've missed you as well. 
                        You are such an essential part of our community, @FunctionDefinition, encoding all the wondrous ideas that come from the outside world, so that we may enjoy them. 
                        So this must be the new director, full of ideas?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Yes, they just arrived! I've been introducing them to everyone; we just met all the values and collections, and just talked to @Convert. 
                        We haven't talked about input and output yet, but I wanted to stop by to see you first, since you and @Convert work so closely together.`
                    ),
                    null,
                    dialog(
                        'Template',
                        'serious',
                        `We do, don't we? An odd couple we are. They are so — free. 
                        It makes me uncomfortable sometimes. 
                        But I like to think that I bring a little order to our partnership, and a little ceremony.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Do you want to share what you do?`
                    ),
                    null,
                    dialog(
                        'Template',
                        'neutral',
                        `Happily. 
                        To put it simply, I work with @TextLiteral make new text from any values you might give me. 
                        
                        Ultimately, they all need to be text, and so you'll have to work with @Convert to get them that way. 
                        
                        But once you give me all that text, I'm happy to stitch it together and assemble your beautiful prose into a single text value for display, or whatever other purposes you might have.`
                    ),
                    null,
                    dialog(
                        'Template',
                        'serious',
                        `For example, did @FunctionDefinition show you how text knows how to add itself to other text? 
                        
                        Like this? 
                        
                        This little expression converts ⧼7⧽ to text, then adds it to ⧼'I have'⧽, then adds ⧼'apples'⧽. 
                        
                        But it's so untidy, and makes it hard to read what's happening, and the conversion to text feels so unnecessary.`
                    ),
                    edit(`'I have' + (7→"") + 'apples'`),
                    null,
                    dialog(
                        'Template',
                        'serious',
                        `What I do is make text like this clean, organic, and simple, even. 
                        So that same phrase with me would be something like this.`
                    ),
                    dialog(
                        'Template',
                        'happy',
                        `
                        Isn't that so much more elegant? 
                        You can put me anywhere inside a @TextLiteral, and I'll make your values into text, and work with @TextLiteral to make a @TextType.

                        This makes it so much easier to write beautiful prose that uses values.
                        `
                    ),
                    edit(`"I have \\7\\ apples"`),
                    null,
                    dialog(
                        'Template',
                        'neutral',
                        `And when I say any expression, I really do mean any. 
                        For example, imagine you wanted to do some arithmetic and created some text with the result. 
                        You might do this.
                        
                        This sums several numbers and then makes text with the sum. 
                        Truly wondrous, isn't it? 
                        And so much more graceful than ⧼'I have ' + (1 + 2 + 5 + 8) + ' apples'⧽, with all those extra additions.`
                    ),
                    edit(`"I have \\1 + 2 + 5 + 8\\ apples"`),
                    null,
                    dialog(
                        'Template',
                        'curious',
                        `And so you might be wondering, "What if I want to use @Template in some text?"
                        
                        Well, maybe you weren't wondering that, but I'm going to tell you anyway.
                        
                        In any @TextLiteral, just give me two in a row! I'll interpret that as just one @Template instead of an empty expression, which wouldn't have any meaning anyway.
                        
                        Try removing the \\ and you'll see that the slash regains its meaning, restoring the text as me, a @Template.`
                    ),
                    edit(`"I'm just \\\\regular\\\\ text, not a template."`),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `This is so very graceful, isn't it! @Template, I love how much you appreciate the beauty in expression. 
                        It inspires me so much to be graceful myself!`
                    ),
                    dialog(
                        'Template',
                        'happy',
                        `Why thank you @FunctionDefinition, I am proud of what I do. 
                        I hope you are proud of what you do, because I certainly couldn't do it without you. 
                        Inside me are infinite depths of @FunctionDefinition that you made by you that allow me to do my work. 
                        I cherish what you have empowered me to do.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Thank you @Template, that's so kind. 
                        We're going to head out and make one more stop to meet @Conditional.`
                    ),
                    dialog(
                        'Template',
                        'excited',
                        `Oh dear, @Conditional, my new director friend, you are in for such an intellectual treat! 
                        @Conditional is simply divine in how they question the order of the world. 
                        Enjoy!`
                    ),
                ],
            },
            {
                name: 'How to choose?',
                concept: 'Decisions',
                program: fit(FlyIn('?')),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `We've met so many kinds of values on our journey so far, and talked about so many ways of working with them. 
                        There's just one more I wanted to introduce you to. 
                        They're particularly special because they're what make our performances so dynamic. 
                        They're called @Conditional and they are the central character in the Verse that makes *decisions*.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `To be clear, not all decisions: I have my own life, and they have theirs. 
                        
                        But in a performance, when we're trying to decide what to do next on stage, it's all up to them to follow your guidance as director and decide what to do. 
                        
                        So they're a key partner creating exciting performances.`
                    ),
                    null,
                    fit(SpinningInTheDark('?')),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `@Conditional, the silence is breaking! We might put on shows again!`
                    ),
                    dialog(
                        'Conditional',
                        'curious',
                        `@FunctionDefinition? 
                        
                        The silence is breaking? 
                        
                        What is silence? 
                        
                        How does one break it? 
                        
                        Are we every really silent? 
                        
                        Who is this person? 
                        
                        Are they the one breaking it?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Yes, the silence is breaking, and they are the one! 
                        They're a person, and they came to inspire us, and direct our shows. 
                        We've been talking about conversions, and meeting all the values and @Template and @Convert and I wanted them to meet you! 
                        
                        In a way, you're the most special of conversions, because you enable us to convert situations to new values.`
                    ),
                    dialog(
                        'Conditional',
                        'curious',
                        `Do I? 

                        I do make decisions, but what I really do is encode the decisions that directors tell me to make, so is it really me making the decisions?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I think so, yes. 
                        It's more like the director encodes the decision, but then delegates them to you. 
                        You become the decider. 
                        Do you want to show an example?`
                    ),
                    dialog('Conditional', 'curious', `Like this?`),
                    conflict(`_•? ? _ _`),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Yes, exactly like that!

                        Do you see how there's four parts to @Conditional's format? 
                        
                        There's a *condition* first, which needs to be a @BooleanType.
                        
                        Then there's ⧼?⧽.
                        
                        Then there's *yes* expression, then a *no* expression. 
                        
                        What @Conditional does is evaluate the condition, and if it's ⧼⊤⧽, they evaluate the *yes* expression. 
                        
                        Otherwise, they evaluate the /no/ expression. 
                        
                        It's such a powerful way of deciding!`
                    ),
                    null,
                    edit(`1 > 5 ? 'more' 'less'`),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Can you give us a more specific example?`
                    ),
                    dialog('Conditional', 'curious', `Something like this?`),
                    edit(`1 > 5 ? 'less' 'more'`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `Errr, hm. I guess that is a decision, but it's a wrong one. 
                        One isn't less than five. 
                        I guess your decisions aren't always right, but they are reliable, right?`
                    ),
                    null,
                    dialog(
                        'Conditional',
                        'curious',
                        `Reliable? 
                        
                        Maybe? 
                        
                        If you accept that I just decide whatever the director tells me, then yes, but what if the director tells me this?
                        
                        Is it really a decision of the number can never be greater than ⧼3⧽?`
                    ),
                    edit(`[1 2 3].random() > 3 ? 'big' 'small'`),
                    dialog(
                        'FunctionDefinition',
                        'confused',
                        `Hm, I guess that's a good point. 
                        
                        I guess whether something is a decision depends a lot on what the director's decision is. 
                        
                        I guess that means the director has to think pretty carefully about the decisions they give you?`
                    ),
                    null,
                    dialog(
                        'Conditional',
                        'curious',
                        `Carefully? 
                        
                        Skeptical, maybe? 
                        
                        Have you thought about my good friends @BooleanLiteral? 
                        
                        How is their view of the world possibly enough to represent all of the decisions we might want to make? 
                        
                        What if, for example, we wanted a performance that took someone's name and decided if it was beautiful or not? 
                        
                        Is that a true or false decision? 
                        
                        Is that even a decision we should make? 
                        
                        Doesn't it seem awfully reductive and biased?

                        Director, what letters do you think make a name beautiful?`
                    ),
                    edit(`"Verse".has('e') ? 'beautiful' 'ugly'`),
                    null,
                    dialog(
                        'Conditional',
                        'curious',
                        `And think about the questions I answer — why can I only respond to ⧼⊤⧽ and ⧼⊥⧽? 
                        
                        Why not a number? 
                        
                        Don't I have a right to decide if ⧼1⧽ is beautiful?`
                    ),
                    conflict(`1 ? 'beautiful' 'ugly'`),
                    null,
                    fit(SpinningInTheDark('?')),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `I guess I never really thought about it that way. 
                        
                        But @Conditional, even if you have limitations, you are beautiful. 
                        
                        You enable us to do so much in our performances that we couldn't do otherwise. 
                        
                        You make so much joy and laughter possible. 
                        
                        Our director hasn't even seen the amazing things you're capable of yet.`
                    ),
                    dialog(
                        'Conditional',
                        'curious',
                        `Do you really think that? 

                        That I'm beautiful? 
                        
                        Maybe those limits are still worthwhile?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `They absolutely are. 

                        And I'm excited to show our new friend here just how worthwhile they are.
                        
                        Will you be around when I do?`
                    ),
                    dialog(
                        'Conditional',
                        'happy',
                        `Could anything make me more happy?`
                    ),
                ],
            },
        ],
    },
    {
        name: 'Scene change',
        program: fixed(TakeTheMic),
        scenes: [
            {
                name: 'Input',
                concept: undefined,
                program: fit(DarkVoid),
                lines: [
                    fixed(
                        `amp: (Mic() ÷ 10)
                        Phrase(".".repeat(amp.truncate()) rest: Pose(scale: amp))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Did you know that your world and ours are connected?
                        
                        Make some sound and we can hear it...`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `You didn't know the Verse existed, but we know that yours does. 
                        Because it's your world that makes our world interesting.

                        You probably noticed this as we've wandered and met all of the values, collections, and conversations. 

                        What do any of these values /mean/ if there's no person /giving/ them meaning, or providing the values in the first place?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `I want to show you the connection between our worlds, and what they make possible. 
                        
                        We call them **input streams**, and they are perhaps the most magical kind of input in the Verse. 
                        They're like functions that create a special kind of value that changes as your world changes.
                        
                        They also can't communicate in the ways you might be used to. 
                        They're more like heartbeats from another world. 
                        So I'll do my best to explain how they work, since they won't be able to explain themselves.

                        Are you ready to meet one?
                        `
                    ),
                ],
            },
            {
                name: 'Tick, tick, tick...',
                concept: 'Time',
                program: symbol('🕦'),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Let's start with the most elemental stream of all: @Time.
                        
                        To make a stream, we use @Evaluate, and give the name of the type of stream you want.
                        `
                    ),
                    dialog('Time', 'neutral', `tick tick tick tick tick…`),
                    edit(`Time()`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Do you see how time is changing? 
                        
                        Streams are a series of values.
                        Every time a stream gets a new value, @Program reevaluates with the new stream value.
                        
                        That's why this program just keeps counting up: we made a time stream that starts at time 0 milliseconds, and then just keeps updating every time its clock ticks. 
                        This time is your time, from your world.`
                    ),
                    dialog('Time', 'neutral', `tick tick tick tick tick…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `See that ⧼1000ms⧽? 
                        It's a @Time/frequency that tells @Time to tick every 1000 milliseconds instead of the default of every 33 milliseconds, it's default. 
                        
                        Now it's like a counter that ticks every second. These inputs that @Time takes are like a configuration: they tell the stream how to behave.`
                    ),
                    dialog('Time', 'neutral', `tick… tick… tick… tick… tick…`),
                    edit(`Time(1000ms)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `But we can use all of the wonderful characters we've met to transform time further. 
                        For example, what if we wanted to know if time was a multiple of ⧼2⧽? We could use @MeasurementType/remainder, which gets the remainder of a division. 
                        
                        If the remainder is zero, we'll evaluate to ⧼⊤⧽ and ⧼⊥⧽ otherwise.
                        
                        See how it changes back and forth between ⧼⊤⧽ and ⧼⊥⧽? It's so magical.`
                    ),
                    dialog('Time', 'neutral', `tick… tick… tick… tick… tick…`),
                    edit(`(Time(1000ms) % 5) = 2ms`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `There's another thing you might have noticed: there's an area below the output that is a timeline. 
                        
                        It updates each time the program reevaluates, which is each time a stream changes. 
                        It's showing every time @Time ticks. 
                        `
                    ),
                    dialog('Time', 'neutral', `tick… tick… tick… tick… tick…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Try dragging on the timeline @UI/timeline, using the timeline buttons, using the arrow keys with the timeline focused, or pressing the ⏸️ and ▶️ @UI/playToggle buttons. 
                        You can go backwards in time, to see previous evaluations.
                        
                        The dashed arrows step to previous and future stream inputs. 
                        The solid ones step between different steps of the program. 
                        
                        Try navigating time, and seeing what the program shows. 
                        This is how you can see all of the beautiful expressions you've learned about being evaluated by @Evaluate, one step at a time, resulting in the final value that @Program displays on stage.
                        `
                    ),
                    dialog('Time', 'neutral', `tick… tick… tick… tick… tick…`),
                    edit(`Time(1000ms)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `@Time is an interesting stream because it can be used for many different things: keeping track of how long a performance has been happening, timing some event, animating a word. 
                        It's one of the most flexible streams, but also one of the most abstract.`
                    ),
                ],
            },
            {
                name: 'Clickity clack',
                concept: 'Key',
                program: symbol('⌨️'),
                lines: [
                    fit(
                        `Phrase("⌨️" rest: Sequence({0%: Pose(tilt: -5°) 25%: Pose(tilt: 0°) 50%: Pose(tilt: 5°) 75%: Pose(tilt: 0°) 100%: Pose(tilt: -5°)} 1s 'straight'))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `If I'm not mistaken, there's a thing in your world called a “keyboard”? 
                        
                        It's a way of selecting which one of us you want to appear in your documents, right? 
                        
                        Well in the Verse, we receive these requests as a stream of text, each text value representing the key that was pressed. 
                        We use these to listen to what people in your world are typing.
                        
                        This stream is called @Key.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Here's a simple example. 
                        Click the stage or focus it with the keyboard and then press any keyboard key. 
                        You'll see the key you've typed appear by name. 
                        
                        That's because each time the key stream changes, @Program evaluates the key stream as its latest value, and then shows it on stage.`
                    ),
                    dialog('Key', 'neutral', `clickety clickety clickety`),
                    edit(`Phrase(Key())`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `This stream will change any time any key is pressed. 
                        
                        But you can tell a key stream to just change when a particular key is pressed.
                        
                        See how the stream changes to ⧼a⧽ the first time, but then doesn't change after? 
                        
                        That's because this stream only changes when ⧼a⧽ is pressed, so it's always showing ⧼a⧽.
                        But you'll always see the new key value appear in the timeline.`
                    ),
                    dialog('Key', 'neutral', `clickety 'a'…`),
                    edit(`Phrase(Key('a'))`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Sometimes it's helpful to know when a key is released, instead of pressed. 
                        Just pass ⧼⊥⧽ to tell the @Key stream that you to know when a key is released instead of pressed.
                        
                        Now, press and hold the 'a' key and then when you release, you'll see the 'a' appear on stage.
                        
                        Didn't catch it? 
                        Press the ↻ button to reset the performance and try it again.`
                    ),
                    dialog('Key', 'neutral', `clickety 'a'…`),
                    edit(`Phrase(Key('a' ⊥))`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `@Key streams are really helpful when you want a performance to react to keys that the audience presses. 
                        
                        For example, you could check if a key has the word "Arrow" in it to decide if an arrow key was pressed.
                        
                        Press an arrow key and you'll see ⧼'move'⧽, press something else and you'll see ⧼'stay'⧽`
                    ),
                    dialog('Key', 'neutral', `clickety 'Arrow'…`),
                    edit(`Phrase(Key().has('Arrow') ? 'move' 'stay')`),
                ],
            },
            {
                name: 'Hummmmmmm…',
                concept: 'Pointer',
                program: symbol('👆🏻'),
                lines: [
                    fixed(
                        `Phrase("👆🏻" rest: Sequence({0%: Pose(offset: Place(0m 0m)) 25%: Pose(offset: Place(-1m 1m)) 50%: Pose(offset: Place(1m 1m)) 75%: Pose(offset: Place(1m 0m)) 100%: Pose(offset: Place(0m 0m))} 3s))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `You also have something called a "mouse" in your world, and "trackpads", and "touchscreens"? 
                        
                        These appear in our world as streams @Pointer, which is a stream of places on stage.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Move your pointer around the stage and you'll see the stream of @Place change on stage.`
                    ),
                    edit(`Pointer()`),
                    dialog('Pointer', 'neutral', `wzzzzzzzzz…`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `@Pointer can be fun if you want to link the place of a phrase to where the pointer is.`
                    ),
                    fit(`Phrase("hi" place: Pointer())`),
                    dialog('Pointer', 'neutral', `wzzzzzzzz…`),
                ],
            },
            {
                name: 'And... now!',
                concept: 'Button',
                program: symbol('🖱️'),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `@Button is like @Key, but corresponds to the primary pointer button, like a click or tap. 
                        
                        It's just a stream of ⧼⊤⧽, indicating when the pointer button is pressed down.
                        
                        Press that button and watch the events appear on the timeline.`
                    ),
                    dialog('Button', 'neutral', `click… click… click…`),
                    edit(`Button()`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You can configure it to only list to up or down by passing it a ⧼⊤⧽ or ⧼⊥⧽.`
                    ),
                    dialog('Button', 'neutral', `down… down… down…`),
                    edit(`Button(⊥)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Using a @Button stream is one way to advance through stages of a performance, or to trigger some change in a performance. 
                        
                        This little program lists to button presses, and starts off showing sad, but when the @Button stream changes to true, @Conditional evaluates to ⧼'happy'⧽ instead.`
                    ),
                    edit(`Phrase(Button(⊥) ? 'sad' 'happy')`),
                ],
            },
            {
                name: 'Is anyone listening?',
                concept: 'Mic',
                program: symbol('🎤'),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Your world and our world also has sound. 
                        Did you know we can hear you, with your consent? 
                        
                        We listen with a stream called @Mic, which provides a low-level sequence of amplitudes.
                        
                        Your mic might ask for permission to be shared with us.
                        Once you do, you'll see a number that corresponds to amplitude, between ⧼0⧽ and ⧼100⧽.`
                    ),
                    dialog('Mic', 'neutral', `bzzzZZZZZzzzzzZZZZ…`),
                    edit(`Mic()`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `@Mic can be used to make performances respond to sound from the audience. 
                        
                        For example, here we could make a little amplitude visualization by converting the amplitude number from the stream to a certain number of ⧼'o'⧽ characters.
                        
                        See how when you make noise, there are more ⧼'o'⧽s? 
                        The Mic's amplitude is divided by ⧼10⧽, putting it in the ⧼0⧽ to ⧼10⧽ range.
                        Then that value is given to @TextType/repeat function, which repeats the ⧼'o'⧽ the given number of times.`
                    ),
                    dialog('Mic', 'neutral', `bzzzZZZZZzzzzzZZZZ…`),
                    edit(`'o'.repeat(Mic() ÷ 10)`),
                ],
            },
            {
                name: 'You never know…',
                concept: 'Random',
                program: fit(`Phrase(((Time(100ms) % 10) ÷ 1ms) → "")`),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `There's one other stream I want to show you. 
                        Remember ⧼[].random()⧽ from earlier, from @ListType? 
                        
                        Inside it is a stream called @Random, which provides an infinite stream of random numbers. 
                        
                        It's a bit different from the other streams in that it doesn't cause a @Program to reevaluate. 
                        
                        Instead, each time it's evaluated, it gives a different random number.
                        
                        See that little ↻ button by the timeline? Press that to reevaluate the program manually, and you'll see a new number between ⧼0⧽ and ⧼1⧽ each time.`
                    ),
                    dialog('Random', 'neutral', `0.223423… 0.823423… 0.123459`),
                    edit(`Random()`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'surprised',
                        `We can tell @Random the range of numbers we'd like by giving it a minimum and maximum number. This example gives numbers between ⧼1⧽ and ⧼10⧽:`
                    ),
                    dialog('Random', 'neutral', `1… 7… 3… 9… 10… 2…`),
                    edit(`Random(1 10)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Random can be so fun! 
                        
                        We can use it with other streams to create fun chaos. 
                        
                        For example, here we choose a random word from a list of words. 
                        This is the same as ⧼['kitty' 'cat' 'meowy'].random()⧽.
                        
                        Keep pressing ↻ to get a different cat synonym! 
                        Try adding your own word to the list and see if you can get the word to appear.`
                    ),
                    dialog('Random', 'neutral', `1… 2… 2… 1… 3…`),
                    edit(`['kitty' 'cat' 'feline'][Random(1 3)]`),
                ],
            },
            {
                name: 'Keeping moving',
                concept: 'Motion',
                program: fixed(
                    `Motion(
    Phrase("🏀" 3m place: ◆ ? Place(0m 5m) ø) 
    vx: ◆ ? 0m/s ø
    vy: ◆ ? 0m/s ø
    vangle: ◆ ? 0°/s ø
)`
                ),
                lines: [
                    fit(DarkVoid),
                    // dialog('FunctionDefinition', Emotion.Excited, ``),
                    // dialog('Motion', Emotion.Excited, ``),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `So far, all of the *streams* we've talked about are sequences of simple values, like @TextType or @MeasurementType.
                    
                    Some streams, however, can produce complex values.

                    @Motion is one of the most interesting of those.
                    `
                    ),
                    null,
                    fixed(
                        `Motion(
                            Phrase("🏀" 3m place: ◆ ? Place(0m 5m) ø) 
                        )`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Here's the simplest way to use it.
                        
                        This creates a @Motion stream that starts with this @Phrase, but then has a place that is a @Conditional.
                        
                        Do you see the little @Initial? 
                        That means "True if the performance has just started", so the @Conditional here means "If the performance has just started, start the ball at the place ⧼Place(0m 5m)⧽".
                        
                        Otherwise, it's @NoneLiteral, which tells the @Motion stream to keep moving the ball based on *gravity*.
                        
                        The ground is at ⧼0m⧽ on the y-axes`
                    ),
                    dialog('Motion', 'excited', `Woosh…`),
                    null,
                    fixed(
                        `Motion(
    Phrase("🏀" 3m place: ◆ ? Place(0m 5m) ø) 
    vx: ◆ ? -5m/s ø
    vy: ◆ ? 5m/s ø
    vangle: ◆ ? 30°/s ø
)`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `But @Motion has many other tricks.

                        For example, it can have initial velocities, @Motion/vx, @Motion/vy, @Motion/vz, and @Motion/vangle.

                        This example makes the ball move left and up, spinning a bit initially.
                        `
                    ),
                    dialog('Motion', 'excited', `Woooosh…`),
                    null,
                    fixed(
                        `Motion(
    Phrase("🏀" 3m place: ◆ ? Place(0m 5m) ø) 
    vx: ◆ ? -5m/s ø
    vy: ◆ ? 5m/s ø
    vangle: ◆ ? 30°/s ø
    gravity: 200m/s^2
)`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `You can even change @Motion/gravity to be really extreme.

                        Try changing it to be like the moon, where gravity is really low!

                        Or try changing @Motion/mass or @Motion/bounciness, which affects how @Phrase bounce.
                        `
                    ),
                    dialog('Motion', 'excited', `Wsh…`),
                    null,
                    fixed(
                        `Motion(
    Phrase("🏀" 3m place: ◆ ? Place(0m 5m) ø) 
    vy: ◆ ? 50m/s ø
)`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `There are a lot of fun things you can do with a @Motion stream!

                        Maybe you already have some ideas...
                        `
                    ),
                ],
            },
            {
                name: 'On cue',
                concept: 'Reaction',
                program: fit("Phrase('…')"),
                lines: [
                    fit("Phrase('…' rest: Pose(tilt: 120°))"),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `All of these streams that I've shown you come from your world. 
                        
                        But sometimes, it's helpful to create streams of your own, based on these other streams. 
                        That's where my friend @Reaction comes in!
                        
                        @Reaction, are you around?`
                    ),
                    dialog(
                        'Reaction',
                        'excited',
                        `Yeah yeah yeah! 
                        It's @FunctionDefinition! 
                        How are you doing? 
                        
                        Everything has been so… constant, lately. 
                        Have you noticed that?`
                    ),
                    null,
                    fit("Phrase('…' rest: Pose(tilt: 240°))"),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `You mean the silence? 
                        Yes, nothing's really changed, has it, since the last person left? 
                        
                        What's that been like for you?`
                    ),
                    dialog(
                        'Reaction',
                        'sad',
                        `Super strange, super strange. 
                        My whole life has been about change, always listening and watching for new inputs from people, helping transform them into values. 
                        
                        But there hasn't been anything. Until just a moment ago… 
                        
                        Wait … is that a person?`
                    ),
                    null,
                    fit("Phrase('…' rest: Pose(tilt: 360°))"),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Yes! 
                        This is our new potential director. 
                        
                        I was just showing them @Time, @Key, @Pointer, @Button, @Mic, and @Random, so you probably noticed all the new inputs they were bringing from their world.`
                    ),
                    dialog(
                        'Reaction',
                        'excited',
                        `Yesssss, change is coming! 
                        Can I show you what I do?`
                    ),
                    dialog('FunctionDefinition', 'eager', `Yes, please do!`),
                    null,
                    dialog(
                        'Reaction',
                        'serious',
                        `Okay, so I need three things from you: a condition for change, an initial value, and a next value.

                        The *initial* value is whatever value I should make before any change has happened.
                        It's just a normal expression, of any kind!

                        Then you put ⧼…⧽ after the initial value to tell me that the value can change.

                        After ⧼…⧽, give me *condition* that evaluates to ⧼⊤⧽ or ⧼⊥⧽. 
                        It should generally check one or more streams — otherwise, there's nothing changing, since the only source of change in a performance is streams.

                        Then put another ⧼…⧽ after the condition to tell me that the value can change.

                        Finally, the *next* value is whatever value I should make whenever the condition changes.`
                    ),
                    conflict(`_ … _•? … _`),
                    null,
                    dialog(
                        'Reaction',
                        'serious',
                        `Here's an example. 
                        See the @Key stream? 
                        Putting ⧼∆⧽ before it asks, "Did this stream change"? 
                        
                        Before it changes, I evaluate to the initial value, ⧼1m⧽.
                        
                        But when the space key is pressed, @Program reevaluates, and I evaluate to the *next* expression, which is ⧼1m⧽ plus whatever the previous stream value was, that's represented by ⧼.⧽. 
                        
                        This adds 1m to the size of the phrase, making the word get bigger and bigger.`
                    ),
                    fit(`Phrase("hi" size: 1m … ∆ Key(" ") … 1m + .)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `@Reaction, that is so cool. 
                        
                        Do you want to introduce @Changed?
                        You seem to work with them closely.`
                    ),
                    dialog(
                        'Reaction',
                        'kind',
                        `Yes, @Changed and I are best buddies! 
                        They help me know when something has changed.
                        
                        They're like a stream whisperer, listening closely to the director's world…`
                    ),
                    null,
                    dialog(
                        'Changed',
                        'eager',
                        `Wow, stream whisper, that seems a bit extreme...`
                    ),
                    dialog(
                        'Reaction',
                        'serious',
                        `Oh hi @Changed! 
                        Do you want to say more about what you do?`
                    ),
                    dialog(
                        `Changed`,
                        'bored',
                        `I mean, I just tell you if a stream changed.
                        Give me a stream, and I'll check.
                        
                        That's it.`
                    ),
                    dialog(
                        'Reaction',
                        'confused',
                        `Well, it's more than that right?`
                    ),
                    dialog(
                        'Changed',
                        'bored',
                        `Not really. That's kind of it.
                        I mean, I'm good at it, but that's my only thing.`
                    ),
                    dialog(`Reaction`, 'confused', `…`),
                    null,
                    dialog(
                        'Reaction',
                        'eager',
                        `Okay.
                        
                        Well, I think you're more important that than. Because I'm pretty useless without you! For example, if you give me a condition that doesn't check a stream, I'm never going to create a new value. 
                        Like here, the condition a @BooleanType from @Button, but without you, I only ever change with the button .`
                    ),
                    fit(`Phrase("hi" size: 1m … Key(' ') = ' ' … 1m + .)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Oh, that makes sense. And @Reaction, you work with any stream?`
                    ),
                    dialog(
                        'Reaction',
                        'eager',
                        `Yes, any stream! 
                        And actually, even myself. 
                        So if you make a reaction, and want to make a reaction that reacts to it reacting, you can do that too. 
                        But we won't worry about that now, since that doesn't usually come up in simple performances.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Thank you @Reaction. Will you be around to help as I show our director the rest of our beautiful Verse?`
                    ),
                    dialog(
                        'Reaction',
                        'happy',
                        `Yes, of course, any time. I can't wait to see your inspirations!!`
                    ),
                ],
            },
        ],
    },
    {
        name: 'Take the stage',
        program: fit(RainingEmoji),
        scenes: [
            {
                name: 'Output',
                concept: undefined,
                program: fit(StaticRainingEmoji),
                lines: [
                    symbol('😀'),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `So what do you think so far? 
                        
                        I think the Verse is pretty neat, mostly because the characters in it are so neat. 
                        Everyone is just so special!`
                    ),
                    null,
                    symbol('🥱'),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `You're bored? 
                        Oh my. 
                        I thought all of this would be so interesting! 
                        
                        What were you hoping for?`
                    ),
                    null,
                    symbol('😴'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `I see. 
                        Text and numbers and lists and streams are boring. 
                        I guess I really haven't shown you all the things we can make with all of this. 
                        
                        Maybe it's time we start talking about output.`
                    ),
                    null,
                    symbol('🤗'),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You've seen a lot of output already. 
                        
                        Every time @Program evaluates, it results in a value, and @Program shows that value on stage. 
                        
                        But so far you've only seen things like numbers, text, lists. 
                                                    
                        I get it, you just want to see full performances, just like we do!`
                    ),
                    null,
                    symbol('💬'),
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Remember that output I showed you a long time ago, @Phrase? 
                        
                        That's where the performances really begin. 
                        Let's start there! 
                        And then I'll show you ways of building ever more interesting performances from that building block. 
                        
                        Let me introduce you!`
                    ),
                ],
            },
            {
                name: 'Say what?',
                concept: 'Phrase',
                program: symbol('💬'),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `@Phrase? Are you out there?`
                    ),
                    dialog(
                        'Phrase',
                        'excited',
                        `Out and proud my darling, how are you? You look so glamorous today! I would love to get you on stage one of these days. `
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'shy',
                        `Oh, the stage isn't for me, I'm more than happy to be backstage, tinkering with the set.`
                    ),
                    dialog(
                        'Phrase',
                        'curious',
                        `Don't be modest, you are every bit as fabulous as me. 
                        All you need is a bit of color, a flattering font, and you would be wonderful. 
                        You have so much to share! 
                        
                        Speaking of, we haven't put on a show in forever, have we? 
                        Has it been quiet? 
                        You know how much I talk to myself, I can never tell.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `It has been quiet. 
                        Ever since our last director left, it's been a void. 
                        
                        But that is changing! 
                        We have a new person! 
                        We've been meeting the whole family, @Program, @ExpressionPlaceholder, @Evaluate, all the values, all the collections. 
                        
                        We just spent time with all of the streams too, and @Reaction and @Conditional. 
                        I'm starting to feel things hum. 
                        
                        But I haven't introduced our new director here too much about what you do on stage? 
                        This is so your world, and not mine, I figured we'd come to you first.`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'happy',
                        `Well you came to the right place. 
                        I love talking about all things stage life. 
                        I can't wait to show you all the wonderful little things we do here on stage!`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Let the show begin!`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'excited',
                        `So I know you've seen me do this.`
                    ),
                    edit(`Phrase('hi')`),
                    null,
                    dialog(
                        'Phrase',
                        'kind',
                        `That, my darling, is the simplest way to get a word on stage. 
                        
                        But there's so much more!
                        
                        For example, did you know that you can style the text you give me by just putting special symbols in @TextLiteral?
                        
                        Behold: bold!`
                    ),
                    edit(`Phrase('*hi*')`),
                    null,
                    dialog(
                        'Phrase',
                        'kind',
                        `Not enough sass for you?
                        
                        How about underline, italics, light text, and extra bold text, *all at once*?`
                    ),
                    edit(`Phrase('/I/ _am_ ^the^ /fabulous/ 💬!')`),
                    null,
                    dialog(
                        'Phrase',
                        'kind',
                        `Still not impressed?

                        Mix them all together!`
                    ),
                    edit(`Phrase('/_*I am the fabulous*_/ 💬!')`),
                    null,
                    dialog(
                        'Phrase',
                        'kind',
                        `And if you ever want to use any of these special formatting characters as text instead of formatting, you can just repeat them, kind of like in @TextLiteral, and I'll just use the character literally.`
                    ),
                    edit(
                        `Phrase('Format with /italic/ (//), _underline_ (__), |light| (||), /bold/ (**), ^extra bold^ (^^) ')`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'excited',
                        `But I can do more than just style text.
                        
                        For example, I can take a @Phrase/size, measured in meters ⧼m⧽. 
                        
                        Try changing the size to any size you like!`
                    ),
                    edit(`Phrase('hi' 2m)`),
                    null,
                    dialog(
                        'Phrase',
                        'kind',
                        `That size can be any expression. 
                        
                        For example, say we wanted it to grow as @Time ticks. We can take time, multiply it by a fraction of a meter, and glorious, tick tick tick, hi hi hi.
                        
                        Try changing the frequency or the multiplier. See what beautiful growth you can create!`
                    ),
                    fit(`Phrase('hi' Time(100ms)·0.001m/ms)`),
                    null,
                    dialog(
                        'Phrase',
                        'excited',
                        `Do you like costumes? 
                        
                        I loooooove costumes. 
                        My @Phrase/font is a costume. 
                        
                        Pick any of the supported fonts to spice up the word you've chosen.`
                    ),
                    fit(`Phrase('hi' Time(100ms)·0.001m/ms "Poor Story")`),
                    null,
                    dialog(
                        'Phrase',
                        'neutral',
                        `Need me to be somewhere else on stage? 
                        Places please! 
                        
                        A @Place is just an ⧼x⧽, ⧼y⧽, and optional ⧼z⧽ position, in meters ⧼m⧽.
                        
                        Try changing the place to a different location, by editing the numbers, or dragging the @Phrase on stage.`
                    ),
                    fit(
                        `Phrase('hi' Time(100ms)·0.001m/ms "Poor Story" Place(2m 2m))`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'curious',
                        `Do you ever feel a little off axis? 
                        
                        Maybe you give the world a little @Pose/tilt with rotation. 
                        Try changing the rotation value to twist me around!`
                    ),
                    fit(
                        `Phrase('hi' Time(100ms)·0.001m/ms "Poor Story" Place(2m 2m) 20°)`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'happy',
                        `Or maybe we have a little fun, and link rotation to @Time! Wheeeee. 
                        
                        Any guesses on how to make me spin faster? See if you can figure it out…`
                    ),
                    fit(
                        `Phrase('hi' 3m "Poor Story" rotation: Time(10ms) · 1°/ms)`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'serious',
                        `Now's an outstanding time to remind you that @FunctionDefinition here requires inputs to be in a particular order, so if you put them out of order, they. Are. Going. To. Complain.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'shy',
                        `I will… I like things… tidy…
                        
                        Can you put them in the right order?
                        You can cut and paste with the keyboard or click and drag expressions to rearrange them.`
                    ),
                    conflict(
                        `Phrase('hi' "Poor Story" 3m Time(10ms) · 1°/ms Place(2m 2m))`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'kind',
                        `Only want to give a particular property? 
                        Just name the one you want.
                        Here we name @Phrase/size and @Phrase/rotation.`
                    ),
                    edit(
                        `Phrase('hi' size: 3m rotation: Time(10ms) · 0.1°/ms)`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'neutral',
                        `Now that we have all those out of the way, we can talk about dancing, darling! 
                        Dancing is one of my favorite things to do. 
                        
                        There are *four* ways I move.
                        
                        First, I can @Phrase/enter. 
                        Enter is my way of entering the stage. 
                        If you don't tell me how to enter, I'll just BLIP appear on stage like I teleported there. 
                        
                        But if you give me @Pose. I'll start with the pose you give me, then move to my resting pose.
                        
                        For example, let's make me fade in from invisible to oh-so-in-your face visible.`
                    ),
                    edit(`Phrase('hi' enter: Pose(opacity: 0))`),
                    null,
                    dialog(
                        'Phrase',
                        'curious',
                        `Didn't see it? 
                        Did I move too fast for you? 
                        
                        That's because my duration is ⧼0s⧽ by default.
                        
                        Slow me down with a duration, which tells me how long I should take to move between poses. 
                        I made this one nice and slow for you, but try changing duration to higher and lower numbers.`
                    ),
                    edit(`Phrase('hi' enter: Pose(opacity: 0) duration: 5s)`),
                    null,
                    dialog(
                        'Phrase',
                        'neutral',
                        `Now, say I was moving. 
                        
                        We'll set my place to time, so I move to the right a bit every second. 
                        
                        But if we set a @Phrase/move @Pose, and have the @Pose/tilt ⧼5°⧽ and maybe a little color, every time my place changes, I'll glide across the stage with the cutest little tilt.`
                    ),
                    fit(
                        `Phrase('hi' size: 5m place: Place(Time(1000ms) · 0.001m/ms 0m) move: Pose(tilt: 5°) duration: 0.5s)`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'curious',
                        `Not in the mood for cute? 
                        
                        How about you make me a little serious by having me slide across straight by changing my @Phrase/style.
                        
                        It's really subtle, but styles can really change the /emotion/ of a movement.`
                    ),
                    fit(
                        `Phrase('hi' size: 5m place: Place(Time(1000ms) · 0.001m/ms 0m) move: Pose(tilt: 5°) duration: 0.5s style: “straight”)`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'excited',
                        `And for the coup de grâce, let's have me @Phrase/exit in style. 
                        We can play with @Conditional and have me exit stage after 3 seconds.`
                    ),
                    fit(
                        `Time(1000ms) < 3000ms ? 
                            Phrase('hi' size: 5m place: Place(Time(1000ms) · 0.001m/ms 0m) move: Pose(tilt: 5°) duration: 0.5s) 
                            Phrase('')`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'surprised',
                        `Not the exit you were hoping for? 
                        
                        The disappearing act is a bit harsh, ain't it? 
                        Give me an @Phrase/exit @Pose, and I'll glide off on stage toward whatever pose you want. 
                        
                        Here we'll have me get large than life, fall upside down, and fade out to @Pose/opacity ⧼0⧽.`
                    ),
                    fit(
                        `Time(1000ms) < 3000ms ? Phrase('hi' size: 5m place: Place(Time(1000ms) · 0.001m/ms 0m) move: Pose(tilt: 5°) exit: Pose(scale: 10 tilt: 180° opacity: 0) duration: 0.5s) Phrase('')`
                    ),
                    null,
                    dialog(
                        'Phrase',
                        'serious',
                        `You probably noticed that I can take up a little space in @Program. 
                        
                        If you ever want to make me easier to read, just add some lines between my properties.
                        
                        See how that's so much easier to see?`
                    ),
                    edit(
                        `Time(1000ms) < 3000ms ?
    Phrase(
        'hi'
        size: 5m
        place: Place(Time(1000ms) · 0.001m/ms 0m)
        move: Pose(tilt: 5°)
        exit: Pose(scale: 10 tilt: 180° opacity: 0)
        duration: 0.5s
    )
    Phrase(“”)
`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Bravo, bravo, that was just stunning, @Phrase! I'm always blown away by how much you can do with just a few simple ideas.
                        
                        A while ago, I showed our new inspirational friend here about the palette. Do you want to say more about that?`
                    ),
                    dialog(
                        'Phrase',
                        'happy',
                        `Of course! 
                        Any time you get tired of fiddling with @Evaluate's inputs, you can always select a phrase on stage, and a palette will appear, allowing you to change any little thing you might want, my size, font, place, poses. 
                        
                        There's just one rule: if you set any of those to an expression, instead of just a value, you'll have to change them down in @Program, not in the palette.
                        
                        Dress me up all you like!`
                    ),
                    edit(`Phrase('dress me up!')`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Wait, Phrase, what about @Color?`
                    ),
                    dialog(
                        'Phrase',
                        'sad',
                        `Omigod omigod omigod, I CANNOT believe I forgot about color. 
                        
                        Okay, so any @Pose can have a color, right? 
                        But @Color comes in three parts.
                        
                        First, a @Color/lightness between 0 and 100%, which you can think of as how bright a room is, from black to white, with color in the middle at 50%.

                        Then, a @Color/saturation between 0 and 100, which you can think of has how much color there is, from no color gray to full color.

                        And finally, a @Color/chroma, which you can think of like a color wheel, from red to green to blue, in degrees.
                        
                        So you want me to be bright red? Set my rest pose color to ⧼Color(50% 300 30°)⧽.`
                    ),
                    edit(`Phrase('red' rest: Pose(color: 🌈(50% 300 30°)))`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `And want me to shimmer with the rainbow? Take time, get the remainder of dividing by 360, then multiply by degrees and I'll spin around that color wheel all day long!`
                    ),
                    edit(
                        `Phrase('red' size: 5m rest: Pose(color: 🌈(50% 300 (Time() % 360)·1°/ms)))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `@Phrase, that is something to be proud of :P
                        
                        I think we're going to go visit @Sequence next, and then maybe @Group and @Stage. You'll be around to help?`
                    ),
                    dialog(
                        'Phrase',
                        'kind',
                        `I wouldn't miss it. Sparkle and shine!`
                    ),
                ],
            },
            {
                name: '1, 2, 3, 4, 1, 2, 3, 4',
                concept: 'Sequence',
                program: fit(DancingEmoji('💃')),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `@Phrase is just wonderful, aren't they? 
                        They have so much energy, so many amazing flourishes. 
                        
                        Did you know they work closely with our choreographer, @Sequence? 
                        @Sequence and @Phrase together can do some incredible things that @Phrase can't do alone. 
                        
                        Do you want to meet them?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Yay! @Sequence, we have a guest. Are you back there?`
                    ),
                    dialog(
                        'Sequence',
                        'curious',
                        `@FunctionDefinition! You look beautiful. 
                        How long has it been? A week? A month? A century? It was like 1, 2, 3 and then everything was quiet. 
                        
                        I feel like I've been dancing alone forever…`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `It was silent, wasn't it? 
                        But I can totally see you dancing alone. 
                        I was doing my own choreography all alone too, just having to imagine all of you working together. 
                        But it wasn't the same.`
                    ),
                    dialog(
                        'Sequence',
                        'kind',
                        `And you an @Evaluate? Are you still…`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'shy',
                        `I just saw them earlier. They…
                        
                        Oh, we have a guest! @Sequence, this is our new director pal. 
                        They've come to bring us inspiration!`
                    ),
                    dialog(
                        'Sequence',
                        'excited',
                        `(We're going to come back to that tea, @FunctionDefinition). 
                        
                        Director pal, it's so exciting to meet you! Have you come here to learn to dance?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Of course they did! Do you want to show them the steps?`
                    ),
                    null,
                    dialog(
                        'Sequence',
                        'serious',
                        `Absolutely. 
                        
                        You know time? 
                        1, 2, 3, 4, 1, 2, 3, 4? 
                        Well I make time beautiful, arranging a sequence of poses over time for @Phrase to follow. 
                        
                        You tell me what the poses are and I'll help @Phrase follow the steps.
                        
                        Like this example: our smiley friend here has four poses, and smoothly moves between them.`
                    ),
                    fit(
                        `Phrase('😀' rest: Sequence({0%: Pose() 25%: Pose(offset: Place(0m 1m) scale: 2) 50%: Pose(offset: Place(0m 0m) flipy: ⊤) 75%: Pose(tilt: 45°) 100%: Pose()} 2s))`
                    ),
                    null,
                    dialog(
                        'Sequence',
                        'neutral',
                        `Here's a simple example of how I work.
                        
                        Here's @Phrase (hi @Phrase!) with the word “dance”, and they have an enter pose that's a @Sequence rather than a single @Pose. 
                        
                        Follow me? 
                        
                        The sequence has four steps. 
                        Straight, tilt left, tilt right, straight. 
                        When @Phrase enters, they do this cute little wobble, and then stop. 
                        
                        I work with @MapLiteral to map percentages to a @Pose. 
                        Each of those percentages are how far through the sequence each @Pose should happen.
                        
                        Try changing the percentages, especially those two middle ones. It changes the flow and style of the wobble.`
                    ),
                    edit(
                        `Phrase(
    "dance"
    enter: Sequence(
        {
            0%: Pose(tilt: 0°)
            33%:Pose(tilt:-5°)
            66%: Pose(tilt: 5°)
            100%: Pose(tilt: 0°)
        }
    )
)`
                    ),
                    null,
                    dialog(
                        'Sequence',
                        'serious',
                        `Okay, so now imagine you wanted this to be really fast. 
                        By default, I'm pretty quick, so any sequence will be a quarter second and it's done. 
                        
                        But what if you wanted it to be even faster? 
                        
                        Give me a shorter duration and I'll speed every @Pose up to get it done faster. 
                        
                        1, 2, 3, 4! 
                        It doesn't look like a wobble anymore, does it? 
                        More like a frantic little shake!
                        
                        See what it looks like if you slow me down to 2 or 3 seconds…`
                    ),
                    edit(
                        `Phrase(
    "dance"
    enter: Sequence(
        {
            0%: Pose(tilt: 0°)
            33%:Pose(tilt:-5°)
            66%: Pose(tilt: 5°)
            100%: Pose(tilt: 0°)
        } 
        duration: 0.05s
    )
)`
                    ),
                    null,
                    dialog(
                        'Sequence',
                        'excited',
                        `But sometimes, we come up with a lovely move and we just can't help but want to do it over and over, for emphasis!
                        
                        That looks a little violent… try changing my duration and count until we get it just right…`
                    ),
                    edit(
                        `Phrase(
    "dance"
    enter: Sequence(
        {
            0%: Pose(tilt: 0°)
            33%:Pose(tilt:-5°)
            66%: Pose(tilt: 5°)
            100%: Pose(tilt: 0°)
        } 
        duration: 0.1s 
        count: 4x)
    )`
                    ),
                    null,
                    dialog(
                        'Sequence',
                        'curious',
                        `But, you say, what if we wanted to do it forever? 
                        
                        You can set a @Phrase/rest to me. For as long as @Phrase is on stage and resting, they'll repeat a sequence. Infinite wobbles!`
                    ),
                    edit(
                        `Phrase(
    "dance"
    rest: Sequence(
        {
        0%: Pose(tilt: 0°)
        33%:Pose(tilt:-5°)
        66%: Pose(tilt: 5°)
        100%: Pose(tilt: 0°)
        } 
        duration: 0.05s
    )
)`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `@Sequence, this is so great! This is exactly what I was hoping you could show us. 
                        
                        But I'm curious, what have you been working on lately, dances of your own? 
                        Maybe something that shows everything you're capable of?`
                    ),
                    dialog(
                        'Sequence',
                        'excited',
                        `Oh my yes! @Phrase and I have been working on this new donut dance. 
                        It comes my favorite treat with nearly everything I've learned in dance. 
                        
                        Do you want to see it?`
                    ),
                    dialog('FunctionDefinition', 'excited', `Yes!!!`),
                    null,
                    dialog(
                        'Sequence',
                        'serious',
                        `Yeah, hmm, oooh, up, eee, eee, eee, eee, bam, boo, yeah, hmm, oooh, up, eee, eee, eee, eee, bam, boo, yeah, hmm, oooh, up, eee, eee, eee, eee, bam, boo, …`
                    ),
                    edit(DonutDance),
                    null,
                    fit(DonutDance),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `@Sequence, that's amazing! How could that not be the next viral dance?`
                    ),
                    dialog(
                        'Sequence',
                        'excited',
                        `You mean next spiral dance. Cheers!`
                    ),
                ],
            },
            {
                name: 'Places please',
                concept: 'Group',
                program: fit(
                    `Group(Grid(2 2) [Phrase("1" rest: Sequence(spin() 1s)) Phrase("2" rest: Sequence(spin() 2s)) Phrase("3" rest: Sequence(spin() 3s)) Phrase("4" rest: Sequence(spin() 4s))])`
                ),
                lines: [
                    symbol('☹️'),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Sigh… everyone keeps bringing up @Evaluate, but I don't know what to say.
                        Are you ever so close to someone, and yet so far away?

                        …`
                    ),
                    null,
                    symbol('😕'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Sorry.
                        I'm excited to be here with you.

                        I think…

                        I think what will help is introducing you to the rest of us, and then putting on a show, and then I think @Evaluate and I can sort things out.`
                    ),
                    null,
                    symbol('🙂'),
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `So who's next?

                        Oh, @Group!
                        I can't believe I forgot @Group.

                        This is perfect timing; you know @Phrase and @Sequence now, and @Group is such an integral part of bringing us all together.
                        @Group cares for us all so deeply.

                        @Group? 
                        Are you there?
                        `
                    ),
                    null,
                    fit(`Group(Grid(2 2) [Phrase("🔳")])`),
                    dialog(
                        'Group',
                        'neutral',
                        `@FunctionDefinition, hello, how are you? 
                        Where has everyone been? 
                        I've been so worried! 
                        Are you okay?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I'm okay. 
                        We're all okay! 
                        The silence is breaking, because we found a person! 
                        They're going to be our inspiration.`
                    ),
                    null,
                    fit(`Group(Grid(2 2) [Phrase("🔳") Phrase("🔳")])`),
                    dialog(
                        'Group',
                        'happy',
                        `That's lovely! 
                        
                        You're not hurt? 
                        Everyone else is here? 
                        
                        I felt like I was wandering in the dark, and couldn't see anyone.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I'm not hurt. Just a bit rusty. 
                        
                        And I haven't seen everyone yet, but almost everyone, and I think everyone is waking up okay. 
                        
                        (Though apparently some have been at the beach). 
                        
                        We've met nearly everyone. 
                        We're getting ready to put on a show! 
                        And the best shows always involve you…`
                    ),
                    null,
                    fit(
                        `Group(Grid(2 2) [Phrase("🔳") Phrase("🔳") Phrase("🔳")])`
                    ),
                    dialog(
                        'Group',
                        'kind',
                        `A show! 
                        I can't wait to help. 
                        You kids are always so inspiring, I'm always happy to do my part. 
                        What shall I do, where do I start?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Well, we've talked about @Phrase, so maybe start with a bit about your purpose?`
                    ),
                    null,
                    fit(
                        `Group(Grid(2 2) [Phrase("🔳") Phrase("🔳") Phrase("🔳") Phrase("🔳")])`
                    ),
                    dialog(
                        'Group',
                        'neutral',
                        `My purpose, yes. Let's see — I think my purpose is to bring everyone together. 
                        
                        But I particularly bring @Phrase together, in beautiful shapes and arrangements on stage.
                        
                        Did you know that @Phrase can be in more than one place at once? 
                        That's because they aren't so much one text phrase on stage, but a phrase maker, just like I'm a @Group maker. 
                        
                        They'll make as many as you need, and then I lay them out on stage, as you direct me. 
                        
                        All I need is an @Arrangement, and a list of @Phrase, and I'll do the rest.`
                    ),
                    null,
                    dialog(
                        'Group',
                        'excited',
                        `Here's a simple example. 
                        
                        Here I'm using a @Stack arrangement, which creates a vertical arrangement of @Phrase, or other @Group. 
                        
                        See how I make a tidy little stack of words? 
                        They're arranged just so, with a little breathing room for everyone and everyone centered.
                        
                        Everyone is so cute!`
                    ),
                    edit(
                        `Group(
    Stack() 
    [
        Phrase("one")
        Phrase('two')
        Phrase('three')
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'serious',
                        `But sometimes we all need a little space. 
                        So you can give @Stack some padding.
                        
                        Try changing the padding to a different @MeasurementLiteral!`
                    ),
                    edit(
                        `Group(
    Stack(2m) 
    [
        Phrase("one")
        Phrase('two')
        Phrase('three')
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'happy',
                        `Just as with anything in the Verse, that padding value can come from anything, like input. 
                        
                        Sometimes we grow apart don't we? 
                        Let's dance that idea by making the padding grow over time…`
                    ),
                    edit(
                        `Group(
    Stack(Time(100ms)·0.001m/ms) 
    [
        Phrase("one")
        Phrase('two')
        Phrase('three')
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'surprised',
                        `We also have a @Row, which is a horizontal arrangement.`
                    ),
                    edit(
                        `Group(
    Row(Time(100ms)·0.001m/ms) [
        Phrase("one")
        Phrase('two')
        Phrase('three')
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'curious',
                        `Sometimes it's nice to use two dimensions instead of one. 
                        
                        If you tell me how many rows and columns you want, I'll make a @Grid of phrases. 
                        
                        Just make sure to give me enough phrases to fill the grid! 
                        You can also give @Grid padding and a cell size if you want to be extra precise. 
                        
                        Grids are layed out a row at a time, so put your @Phrase list in order of rows.`
                    ),
                    edit(
                        `Group(
    Grid(2 2) [
        Phrase("one")
        Phrase('two')
        Phrase('three')
        Phrase('four')
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'excited',
                        `And if you wanted a very specific arrangement?
                        
                        You could use @Free, and tell me exactly where you want all the phrases. 
                        Just be sure to give a place to each @Phrase, otherwise I'll just place it at ⧼Place(0m 0m⧽).`
                    ),
                    edit(
                        `Group(
    Free() [
        Phrase("one" place: Place(-2m 2m))
        Phrase('two' place: Place(-1m 1m))
        Phrase('three' place: Place(0m 0m))
        Phrase('four' place: Place(1m -1m))
        Phrase('five' place: Place(2m -2m))
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'curious',
                        `And did you know you can also place me inside myself? 
                        A @Group in a @Group in a @Group, it's very silly. 
                        
                        This can make it possible to make a @Grid of @Stack for example.`
                    ),
                    edit(
                        `Group(
    Grid(2 2) [
    Group(Stack() [Phrase("one") Phrase(“two”)])
    Group(Stack() [Phrase("three") Phrase(“four”)])
    Group(Stack() [Phrase("five") Phrase(“six”)])
    Group(Stack() [Phrase("seven") Phrase(“eight”)])
    ]
)`
                    ),
                    null,
                    dialog(
                        'Group',
                        'surprised',
                        `Hm, that kind of looks like a 4 by 2 grid, doesn't it? 
                        
                        Let's make it a little clearer by tilting two of the stacks.
                        
                        Oh, yes, you can give me all the same properties that @Phrase takes!`
                    ),
                    edit(
                        `Group(
    Grid(2 2) [
    Group(Stack() [Phrase("one") Phrase(“two”)])
    Group(Stack() [Phrase("three") Phrase(“four”)] rest: Pose(tilt: 45°))
    Group(Stack() [Phrase("five") Phrase(“six”)])
    Group(Stack() [Phrase("seven") Phrase(“eight”)] rest: Pose(tilt: 45°))
    ]
)`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'Group',
                        'curious',
                        `Was that good, @FunctionDefinition? 
                        Did I cover everything?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `That was better than good! 
                        I think you showed our new director here just how much is possible. 
                        
                        Is there anything else you want to share?`
                    ),
                    null,
                    dialog(
                        'Group',
                        'serious',
                        `I don't think so… 
                        
                        I'm always learning new arrangements, so always check back for new designs I've come up with!
                        
                        And @FunctionDefinition, how are you and @Evaluate doing? I know the last time I saw you talking, things were bumpy…`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'shy',
                        `I… I'd rather not talk about it right now.`
                    ),
                    dialog(
                        'Group',
                        'kind',
                        `Okay.
                        I'm always here if you want to chat.`
                    ),
                ],
            },
            {
                name: 'Stage… right?',
                concept: 'Stage',
                program: fixed(
                    `Stage([Phrase("🎭" 5m)] background: Color(0% 0 0°))`
                ),
                lines: [
                    fixed(
                        `Stage([Phrase("🎭" 5m rest: Sequence(bounce(5m) 2s))] background: Color(0% 0 0°))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Okay, there's someone who's been here all along, but we haven't really done a proper introduction.
                        
                        May I introduce @Stage!`
                    ),
                    dialog(
                        'Stage',
                        'neutral',
                        `HELLO, @FunctionDefinition
                        
                        HELLO PERSON.`
                    ),
                    null,
                    fixed(
                        `Stage([Phrase("🎭" 5m rest: Pose(tilt: 25° scale: 5))] background: Color(0% 0 0°))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `@Stage, this person is our new director. 
                        
                        They're so excited to finally meet you!`
                    ),
                    dialog(
                        'Stage',
                        'neutral',
                        `HELLO DIRECTOR. ARE YOU HERE TO INSPIRE?`
                    ),
                    null,
                    fixed(
                        `Stage([Phrase("🎭" 5m rest: Pose(tilt: -150° scale: 10))] background: Color(0% 0 0°))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Indeed they are, with all kinds of expressions from their world.`
                    ),
                    dialog(
                        'Stage',
                        'neutral',
                        `I AM HERE TO SERVE. TELL ME WHAT TO PUT ON STAGE, AND I WILL.`
                    ),
                    null,
                    fixed(
                        `Stage([Phrase("🎭" 5m)] background: Color(0% 0 0°))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `@Stage is one of a kind, and always there. 
                        
                        In fact, if you give @Program a @Phrase or @Group, @Program will show a @Stage, even if you don't mention them.
                        
                        But if you do mention them, you can be more specific about how you want the stage to appear.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Maybe let's start with a simple example. 
                        
                        This just gives @Stage a list of one @Phrase. 
                        
                        You don't have to mention @Stage here; this just shows what's happening behind the scenes when you give @Phrase to @Program.`
                    ),
                    edit(`Stage([Phrase(“🐈”)])`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `But say you want the stage to have a different background color, such as black.`
                    ),
                    dialog('Stage', 'surprised', `BRRRRR…`),
                    edit(`Stage([Phrase(“🐈”)] background: Color(0 0 0°))`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You can also frame the stage, for example, with a @Rectangle, which takes a top left place and bottom right place.
                    
                        See how the kitty is a little bit out of frame?`
                    ),
                    dialog('Stage', 'surprised', `THE WORLD IS CLOSING IN…`),
                    edit(
                        `Stage([Phrase(“🐈” place:Place(-2.5m))] background: Color(0 0 0°) frame: Rectangle(-2m -2m 2m 2m))`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `You can also apply all of the same properties to @Stage as you can a @Group or @Phrase. 
                        Let's tilt the whole stage!`
                    ),
                    dialog('Stage', 'surprised', `WHOA, CAREFUL NOW…`),
                    edit(
                        `Stage(
    [Phrase(“🐈” place:Place(-2.5m))]
    background: Color(0 0 0°)
    frame: Rectangle(-2m -2m 2m 2m)
    rest:Pose(tilt: 30°)
)`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `There's much more you can do with @Stage, but you can explore with them anytime. Right @Stage?`
                    ),
                    dialog('Stage', 'excited', `ALWAYS!`),
                ],
            },
            {
                name: 'Is there someone named...',
                concept: 'Choice',
                program: fixed(`Phrase("🔘" 10m)`),
                lines: [
                    fixed(
                        `Phrase("🔘" 10m enter: Sequence({0%: Pose(offset: Place(0m 0m)) 50%: Pose(offset: Place(0m -0.2m)) 100%: Pose(offset: Place(0m 0m))} 1s count: 3x))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `So you know @Key, @Pointer, and @Button, the streams we just talked about? 
                        
                        They can be very fun, but they have one problem: not everyone in the audience can use them.
                        
                        Some people do not have hands, or cannot use their hands, or cannot use them precisely to click keys or use a mouse.
                        
                        We know that many some people use their voices to communicate with our world, or even their eyes.
                        
                        So using @Key, @Pointer, or @Button means some people in your audience won't be able to participate.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Everyone should be able to participate! 
                        
                        So now that we've talked about @Phrase in more detail, I wanted to show y ou one final stream, @Choice, which is a stream of @Phrase names that have been selected, independent of how it was selected. 
                        
                        For example, an audience might use a mouse to click on a @Phrase, or they might use a keyboard to select it, or there might be other devices they use. 
                        
                        Whatever they use, @Choice will contain their latest selection.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Here's a simple example. 
                        
                        See how it has three phrases? 
                        The first two have two important details. 
                        First, they're set to be selectable. 
                        
                        This tells @Stage that if they are clicked, or if the keyboard is used to select them, that they are chosen. 
                        
                        The second detail is that they have a @Phrase/name.
                        
                        That gives @Stage a unique name for the phrase that was chosen. 
                        
                        It's important that it's unique so that @Stage knows what was chosen.
                        
                        The third phrase is set to a @Choice stream, which is a series of @Phrase or @Group names are selected. 
                        Here, we're just giving the name to another phrase, so that it shows what name is selected.
                        
                        Try clicking the cat or dog, or using the keyboard to select one. 
                        
                        See how the third @Phrase shows the name selected?
`
                    ),
                    dialog(
                        'Choice',
                        'neutral',
                        "cat... 'dog'... 'cat'... 'dog'..."
                    ),
                    edit(
                        `Stage(
    [Group(Stack() [
        Phrase('🐱' name:"cat" selectable:⊤)
        Phrase('🐶' name: "dog" selectable:⊤)
        Phrase(Choice())
    ])
])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `@Choice really is the best way to listen to the audience. 
                        
                        Only use @Key, @Pointer, or @Button if you have no other option, and use it knowing that some in your audience won't be able to enjoy your performance.`
                    ),
                ],
            },
        ],
    },
    {
        name: 'Callbacks',
        program: fit(DarkVoid),
        scenes: [
            {
                name: 'Memories',
                concept: undefined,
                program: symbol('💭'),
                lines: [
                    dialog('FunctionDefinition', 'curious', `…`),
                    null,
                    symbol('🤯'),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `Sometimes I just need to pause and reflect on how incredible my little community is. 
                        We are all so different, and none of us could perform alone. But together, we can do such amazing things!
                    `
                    ),
                    null,
                    symbol('🧠'),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `
                        But it seems no matter how amazing we are, we always forget, and end up repeating ourselves. 
                        
                        And so there's one more there's one more group I want to introduce you to. 
                        
                        They are how we *remember*, and how we organize our memories. 
                        
                        Without them, everything so much of our work would have to be done over, and over, and over, and we'd never be able to put on the most exciting shows.
                        `
                    ),
                ],
            },
            {
                name: 'Naming',
                concept: 'Bind',
                program: symbol(':'),
                lines: [
                    fit(`Phrase(":" rotation: 90°)`),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `@Bind? There's someone I want to introduce you to.`
                    ),
                    dialog(
                        'Bind',
                        'curious',
                        `@FunctionDefinition? 
                        
                        Oh wow, it is you. 
                        It has been absolutely silent for far too long. 
                        
                        Who's your friend here?`
                    ),
                    null,
                    fit(`Phrase(":" rest: Pose(scale: 10ms ÷ Time()))`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `They're our new director! 
                        They've come here to inspire us with new ideas, new expressions.`
                    ),
                    dialog(
                        'Bind',
                        'excited',
                        `Seriously? 
                        
                        That would be amazing. 
                        I haven't felt inspired in a long time. 
                        
                        I feel like all I've been doing is just waiting…`
                    ),
                    null,
                    fixed(`Phrase(":" 10m rest: Sequence(bounce(3m) 1s))`),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Well now that you know, what do you want to do most right now?`
                    ),
                    dialog(
                        'Bind',
                        'serious',
                        `Name things. 
                        Name everything! 
                        Name everyone. 
                        
                        I haven't named anything in forever.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `I haven't told our inspiration here about names at all, aside from the names of all of the characters we've met. 
                        Do you want to explain how names work here?`
                    ),
                    null,
                    symbol(':'),
                    dialog(
                        'Bind',
                        'excited',
                        `Absolutely! So names… you know how every expression makes a value?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `We talked about values! Like @MeasurementType, @TextType, @NoneType, @ListType, @SetType, @MapType...`
                    ),
                    dialog(
                        'Bind',
                        'excited',
                        `Right! 
                        
                        So like, values, when we make them, they just kind of get passed around by us, like a ball, from expression to expression, until @Program makes the final value it gives to @Stage to show. 
                        
                        But sometimes, rather than passing a value around, it's helpful to set it aside, and save it for later, for some other expression.
                        
                        That's what a @Phrase/name is for. 
                        
                        I name things so we can use them later.`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'serious',
                        `So like here's a really simple example. 
                        
                        Let's say we want to name a number. 
                        We just say the name, then :, then the number we want. 
                        
                        Simple, right? 
                        
                        Now any time we use the name number in an expression, it will evaluate to ⧼1⧽. Like here, where we name it, then use its name to give @Program whatever value it has.`
                    ),
                    edit(
                        `number: 1
number`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'serious',
                        `And like, you can tell me what kind of value the name should be by giving me a type with the ⧼•⧽ symbol. 
                        So like, if you wanted to make sure that number was a number, you'd say this.
                        
                        That says to name the value ⧼number⧽ and that the value must be a @MeasurementType.`
                    ),
                    edit(
                        `number•#: 1
number`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'eager',
                        `But like, what if you gave me something that was /not/ a number? 
                        
                        Then I'd complain, because you said it was supposed to be a number, but you gave me some text. 
                        
                        So I don't know what to do. See?`
                    ),
                    conflict(
                        `number•#: "oh hi"
number`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'serious',
                        `But okay, by now you must be thinking, *Why would anyone name a number or text like this???*.
                        
                        Well, imagine, like, you were listening to @Key, and you want know if it's one of a set of secret letters, and show a @Phrase with a big ⧼⊤⧽ if it's a magic letter, and small ⧼⊥⧽ if it's not. 
                        
                        We might start with something like this. 
                        
                        That gets us the ⧼⊤⧽ or ⧼⊥⧽.

                        This is great, when you press one of those letters, ⧼⊤⧽ and when you press something else, you get ⧼⊥⧽. Good.
                        `
                    ),
                    edit(`[ 'a' 'e' 'i' 'o' 'u'].has(Key())`),
                    null,
                    dialog(
                        'Bind',
                        'serious',
                        `
                        Now, let's make the phrase. 
                        
                        We put that @ListType/has expression in for the text and convert it to text. 
                        
                        Now we get @Phrase on stage as ⧼⊤⧽ or ⧼⊥⧽. Good!`
                    ),
                    edit(`Phrase([ 'a' 'e' 'i' 'o' 'u'].has(Key())→"")`),
                    null,
                    dialog(
                        'Bind',
                        'curious',
                        `Now comes the problem part. 
                        
                        How do we change the size of the @Phrase? 
                        
                        Well we already figured out how to check if it's a magic letter, so we could just copy it, and if it's ⧼⊤⧽, then make it size ⧼2m⧽ and otherwise if it's ⧼⊥⧽, make it ⧼1m⧽.
                        
                        That works, but you see how we have to evaluate the same expression twice?`
                    ),
                    edit(
                        `Phrase(
   [ 'a' 'e' 'i' 'o' 'u' ].has(Key())→""
   [ 'a' 'e' 'i' 'o' 'u' ].has(Key()) ? 2m 1m
)`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'excited',
                        `That's where I come in! 
                        See, what you can do is just evaluate the expression and name the resulting value.
                        
                        Magic, right? 
                        All you have to do is put a name and ⧼:⧽ in front of an expression and the value of that expression gets a name. 
                        Then you can use that name anywhere after that expression to refer to its value.
                        
                        Weird, huh? 
                        You want to see how it works? 
                        
                        Try pressing the ← in the timeline and go backwards a few steps to where magic is first named. 
                        
                        See how ⧼magic⧽ gets the value of the ⧼has⧽? 
                        And then how each place ⧼magic⧽ is referred to by name, the same value gets placed?`
                    ),
                    edit(
                        `magic: [ 'a' 'e' 'i' 'o' 'u'].has(Key())
Phrase(
    magic→""
    magic ? 2m 1m
)`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'serious',
                        `You know, you could always just duplicate the expressions you write. 
                        It would be the same show. 
                        
                        It's just kind of wasteful. 
                        I mean, we have to create the exact same values over and over, and then if you change your mind about an expression, you have to change it everywhere.
                        
                        That, and what if you change it in one place, but forget to change it in other places?
                        
                        Like, imagine if you also made the color change, so you had the same expression three times. 
                        And then imagine you wanted to add a letter to our magic letter list with this. 
                        
                        You have to do it three times! 
                        
                        You might forget one, or make a typo. 
                        How are you supposed to express your artistic vision if some of us aren't doing what you intended?`
                    ),
                    edit(
                        `Phrase(
    [ 'a' 'e' 'i' 'o' 'u' 'z'].has(Key())→""
    [ 'a' 'e' 'i' 'o' 'u' 'z'].has(Key()) ? 2m 1m
    rest: Pose(color: Color(50% 100 [ 'a' 'e' 'i' 'o' 'u' 'z'].has(Key()) ? 180° 0°))
)`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'kind',
                        `But like, if you name the expression, you just have to do it once. 
                        
                        And look how much easier that is to read, too.`
                    ),
                    edit(
                        `magic: [ 'a' 'e' 'i' 'o' 'u' 'z'].has(Key())
Phrase(
    magic→""
    magic ? 2m 1m
    rest: Pose(color: Color(50% 100 magic ? 180° 0°))
)`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `@Bind, that was such a good example! 
                        
                        You know I love names. 
                        
                        I was curious, are there also some things that can go wrong with names?`
                    ),
                    dialog(
                        'Bind',
                        'sad',
                        `Yeah, hm. 
                        There are. 
                        
                        Like, suppose we did this. 
                        See the problem? 
                        
                        I highlighted it. 
                        
                        This program defines ⧼veggies⧽ after it's used, which really confuses me. 
                        Because things are evaluated in reading order, so like, we're reading this program and we get to the word ⧼veggies⧽, and we're like, who's ⧼veggies⧽? 
                        
                        And only after the ⧼total⧽ is ⧼veggies⧽ like, “here I am!” and then the whole production falls apart.`
                    ),
                    conflict(
                        `fruits: 5
total: fruits + veggies
veggies: 3
total`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'serious',
                        `Or, like here's an example where we give two different values the same name. 
                        
                        And so we evaluate ⧼5⧽, and name it ⧼fruits⧽, and then we evaluate ⧼10⧽… and then we name it ⧼fruits⧽?? 
                        
                        Like, there's already a ⧼fruits⧽, so which ⧼fruits⧽ are you talking about?
                        
                        Because see, once you name a value, you can't give it a new value. 
                        That name and value are bound together, until @Program is done evaluating. 
                        
                        We don't want anyone getting confused about who is who.`
                    ),
                    conflict(
                        `fruits: 5
fruits: 10
total: fruits + fruits
total`
                    ),
                    null,
                    dialog(
                        'Bind',
                        'kind',
                        `I guess there's one last one. 
                        
                        Say you have this. 
                        See what happened here? 
                        
                        We named ⧼veggies⧽, but then we never used it. 
                        That's usually a bad sign that you're leaving someone out, or didn't use the right name. 
                        
                        Like, maybe you're just not using it, but then why is it there?`
                    ),
                    conflict(
                        `fruits: 5
veggies: 10
fruits + 3`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `This is so helpful @Bind, this is so great. Are you sure there's nothing else?`
                    ),
                    dialog(
                        'Bind',
                        'eager',
                        `Oh! Yes, something really important. 
                        
                        So like, one name is good, right? 
                        But sometimes, multiple names is better? 
                        
                        Like if you wanted to name something in multiple person languages, so everyone can read it? 
                        So like, say you wanted to say fruit in multiple languages.

                        Put the text cursor on the name ⧼fruit⧽.
                        See how there are actually three names in there, and they each have a two letter tag like ⧼/en⧽?
                        Names hide if they're in a language that you haven't chosen.

                        Go down to the ⚙ and choose Spanish, for example, and you'll see the English and Spanish names.
                        
                        So like, one value, but three names, and you can use any of them to get that value. 
                        If you tell us what languages you want, we'll show whichever ones are available. 
                        
                        The more languages the better though, since there are a lot of people in the world who read a lot of different languages!`
                    ),
                    conflict(`fruit/en,fruta/es,水果/zh: 5`),
                    null,
                    fit('Phrase(":")'),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `You know, @Bind works with a lot of other characters, including @Evaluate — you saw them when you name a @FunctionDefinition input, as in ⧼Pose(color: _)⧽ — and we're going to meet a few of these other folks. 
                        
                        @Bind, will you be around to demo?`
                    ),
                    dialog(
                        'Bind',
                        'excited',
                        `Um, yeah! 
                        Now that the silence is breaking, let's name values all day!`
                    ),
                ],
            },
            {
                name: 'Off stage',
                concept: 'Block',
                program: symbol('()'),
                lines: [
                    fixed(`Phrase("()" 1m)`),
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `So there's a character that's been here all along that you haven't met yet, But they've been hiding… 
                        
                        They work super closely with @Bind and many other folks, so I thought we should talk to them next. 
                        
                        @Block, would you come out?`
                    ),
                    dialog('Block', 'shy', `… hi`),
                    null,
                    fixed(`Phrase("()" 2m)`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Hi @Block! 
                        How are you?`
                    ),
                    dialog('Block', 'shy', `… mmm, good?`),
                    null,
                    fixed(`Phrase("()" 3m)`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I have a new friend for you to meet. 
                        
                        They might be our next director.`
                    ),
                    dialog('Block', 'shy', `… hi …`),
                    null,
                    fixed(`Phrase("()" 4m)`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `We were just meeting @Bind and we didn't get a chance to talk about how you two are best of friends!`
                    ),
                    dialog('Block', 'shy', `… yeah, @Bind!`),
                    null,
                    fixed(`Phrase("()" 1m)`),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Do you want to share what you do together?`
                    ),
                    dialog('Block', 'shy', `… can you?`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Yes, of course! 
                        So, it turns out that @Program is mostly just a @Block. 
                        It's just @Block without parentheses. 
                        
                        But you can put @Block with parentheses anywhere in a program. 
                        For example, you can use @Block to clarify the order of evaluating math.
                        
                        Here, @BinaryOperation evaluates ⧼1⧽, then evaluates @Block, then they are added together.
                        
                        @Block, did I get that right?`
                    ),
                    edit(`1 + (2 · 3)`),
                    dialog('Block', 'shy', `… yeah!`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `And so another thing @Block can do is something you've already seen. 
                        @Block let's you name things with @Bind. 
                        
                        But any names defined in the @Block are only defined between the parentheses. 
                        Not before, and not after.
                        
                        For example, check this out. 
                        ⧼a⧽ is defined as ⧼1⧽, then a block starts, and ⧼b⧽ is defined as ⧼2⧽, then ⧼c⧽ is defined as their sum. 
                        
                        What @Block evaluates to whatever value is last in its list of expressions. 
                        That's @Bind, which evaluates to whatever ⧼c⧽ is, which is ⧼3⧽. 
                        
                        Right?`
                    ),
                    conflict(
                        `a: 1
(
  b: 2
  c: a + b
)`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `But what if we wanted to access ⧼c⧽ outside the @Block? 
                        You can't. 
                        ⧼c⧽ is only defined inside the @Block, but not outside it.
                        
                        Is that right @Block?`
                    ),
                    conflict(
                        `a: 1
(
  b: 2
  c: a + b
) + c`
                    ),
                    dialog(
                        'Block',
                        'shy',
                        `… yeah, nothing outside me can see the names inside me. ⧼c⧽ only exists insideeeee`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'neutral',
                        `And one more thing, I think? 
                        
                        Since @Block is a list of expressions, and it only evaluates to the last expression in the list, any expressions in the list that aren't a @Bind are basically ignored.
                        
                        For example, here, all of the arithmetic before the last one is ignored. 
                        
                        The ⧼3⧽, the ⧼5⧽, the ⧼7⧽, all ignored, and @Block just evaluates to the last one, ⧼9⧽.
                        
                        Did I get that right, @Block?`
                    ),
                    dialog(
                        'Block',
                        'shy',
                        `… mhm. Just the last one. The others… I don't know what they're for!!`
                    ),
                    conflict(
                        `(
  1 + 2
  2 + 3
  3 + 4
  4 + 5
)`
                    ),
                    null,
                    fit(`Phrase("()" rest: Sequence(spin() 1s "straight"))`),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Is there anything else you wanted to share, @Block?`
                    ),
                    dialog(
                        'Block',
                        'curious',
                        `… can we make something? Can I help?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I'm so curious too! 
                        But I'm sure our director will decide on their own time. 
                        
                        Inspiration comes at the most unexpected of times!`
                    ),
                ],
            },
            {
                name: 'Stage directions',
                concept: 'Functions',
                program: symbol('ƒ'),
                lines: [
                    symbol('☺️'),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `I'm so happy we've found everyone, and that you've been able to meet all of them. 
                        
                        Everyone is so different, aren't they? But also so interesting? 
                        I feel like we're a family, where everyone is unique in their own way, but that our differences together is what makes us strong. 
                        
                        What do you think of everyone?`
                    ),
                    null,
                    symbol('🙈'),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Me? Well, I'm nothing special. 
                            I just like being behind the scenes, helping out, showing everyone how they're special. 
                            
                            I guess I hadn't even thought about talking about myself. 
                            
                            I guess we can talk a bit about me.`
                    ),
                    null,
                    symbol('ƒ'),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `I guess let's start with what you've already seen. 
                        You know how every value has different functions that you can evaluate on them? 
                        
                        Like numbers know how to @MeasurementType/add, and a text value knows how to check if it @TextType/has some text, or @SetType knows how to check if it has a certain value?
                        
                        Well, I'm the one that defines those functions. 
                        I mean, I don't have the inspiration to create them myself — that's what directors like you do — but I define the inputs a function accepts, the names it has, and the expression that uses the inputs to evaluate to an output value.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Here's a super simple example. The simplest, actually! 
                        
                        This defines a function that always evaluates to the number ⧼1⧽. That's it. 
                        
                        It's not very useful, is it? 
                        It has no name, it takes no inputs, and it always evaluates to ⧼1⧽. 

                        You can also see that @Program evaluated to one of me, a @FunctionDefinition.
                        That's right, @FunctionDefinition are values too!                        
                        
                        I don't know why anyone would ever make such a useless function, but as I said, I'm not the one with inspiration, you are.`
                    ),
                    edit(`ƒ() 1`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `So here's a more useful example. 
                        
                        You know odd and even numbers? 
                        I once had a director that wanted to check if a number was even (divisible by 2, I think that means?), and so they wrote this.
                        
                        This is a function called ⧼even⧽ that takes a single number called… ⧼number⧽. 
                        You need to tell me what kind of value each input is, so @Evaluate can make sure that anything evaluating the function is sending the right kind of value.
                        
                        Then, it takes the number, divides it by two, gets the remainder (with the @MeasurementType.%), and then checks if the remainder is equal to ⧼0⧽, with @MeasurementType/equals. 
                        
                        So the whole function ends up either evaluating to ⧼⊤⧽ or ⧼⊥⧽. For example, this evaluation of even evaluated to ⧼⊥⧽ because ⧼3⧽ is odd.
                        
                        Try using the rewind buttons to see how it works.`
                    ),
                    edit(
                        `ƒ even(number•#) (number % 2) = 0
even(3)`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `You can also tell me what kind of value I should evaluate to. 
                        
                        See how we added ⧼•⧽? after the list of inputs? 
                        
                        That says “the function's expression should evaluate to a ⧼⊤⧽ or ⧼⊥⧽.”
                        
                        But see how we complain about it? 
                        We don't know if the function should be a ⧼⊤⧽ or ⧼⊥⧽ or whatever kind of value you returned, so the show ends.`
                    ),
                    edit(`ƒ even(number•#)•? (number % 2) + 0`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `Functions can be as complex as you want. You can use simple expressions or @Block, and even make functions inside of functions. 
                        
                        For example, check out this function a former director wrote.
                        
                        It uses @Block with many @Bind to figure out how many unique vowels a word has. (I think they were trying to figure out if a word was “complicated” or something). 
                        
                        See how it has a lot of lines? 
                        Well, this still only has one expression: a single @Block, and the @Block has all the lines.
                        
                        And like any @Block, the last line is what it evaluates to: the total number of unique vowels. 
                        Everything else — like the first line, which converts the text into a list of letters, then the list of letters into a set — is just preparation for summing those counts in the middle.`
                    ),
                    edit(
                        `ƒ vowels(word•"") (
  unique: word → [“”] → {}
  a: unique{'a'} ? 1 0
  e: unique{'e'} ? 1 0
  i: unique{'i'} ? 1 0
  o: unique{'o'} ? 1 0
  u: unique{'u'} ? 1 0
  a + e + i + o + u
)
vowels("hello")`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `There's one more thing to show. 
                        I guess it's important, because everyone is so excited about it! 
                        
                        You know how you can make a function and then evaluate it? 
                        Well since the functions I make are values, you can also give them as an input to another function.
                        
                        Here's an example. 
                        Say you had a list of numbers and you just wanted the even numbers in it. 
                        @ListType has this function called @ListType/filter that takes a function as an input and uses the function on each value in the list to decide whether to keep it.
                        
                        Let's make a list of numbers and give @ListType/filter the ⧼even⧽ function we made earlier as an input. 
                        
                        See what happens? We just get the even numbers.
                        
                        Want to try changing it so that it gives odd numbers instead? Maybe try changing the function somehow?`
                    ),
                    edit(
                        `ƒ even(number•#)•? (number % 2) = 0
[ 1 2 3 4 5 6 7 8 ].filter(even)`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `There are so many functions that take functions as input. @ListType has them, @SetType has them, @MapType has them. You can even make your own!`
                    ),
                    fit(
                        `Group(Grid(3 2) [Phrase("translate") Phrase("filter") Phrase("combine") Phrase("find") Phrase("sort") Phrase("until")])`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `I dunno. Sometimes, I see why people say they're so grateful for what I do. 
                        
                        Other times, I feel like it's really directors like you that are where the magic really is. 
                        
                        That makes me feel sometimes like I'm just a hollow shell for the brilliance of people…`
                    ),
                ],
            },
            {
                name: 'Set design',
                concept: 'Structures',
                program: symbol('•'),
                lines: [
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `There are just a few more characters I'd like you to meet. 
                        
                        Next is the most sophisticated character I know, and in a way, a kind of leader. 
                        
                        They help organize all of us, set the foundations of a performance, and really just make everything a lot more orderly. 
                        You are our director, of course, but they're kind of like the one person everyone goes to to keep a show in order. 
                        
                        I think they could be pretty important in any show you put on.`
                    ),
                    null,
                    fit(
                        `Phrase("•" rest: Sequence({0%: Pose(scale: 1) 50%: Pose(scale: 1.2) 100%: Pose(scale: 1)} 3s))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `@StructureDefinition, are you there?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'curious',
                        `@FunctionDefinition… my friend. It's been quiet, has it not? Where has everyone been?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `The silence. 
                        It's gotten to all of us. 
                        
                        Everyone is okay, and I've found almost everyone. 
                        But it has been rough for some. 
                        
                        How have you fared?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'sad',
                        `… Who is your friend? Is that a person?`
                    ),
                    fit(
                        `Phrase("•" rest: Sequence({0%: Pose(offset: Place(-0.25m)) 50%: Pose(offset: Place(0.25m)) 100%: Pose(offset: Place(-0.25m))} 3s))`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Oh, yes, I'm sorry, this is our new director! 
                        They've come to inspire and guide us, to share their stories, ideas, and imaginings. 
                        
                        They've broken the silence!`
                    ),
                    dialog(
                        'StructureDefinition',
                        'eager',
                        `That is incredible. 
                        And quite a relief. 
                        
                        It's nice to meet you director-person. 
                        I'm here and ready to serve.

                        @FunctionDefinition… it has been hard. 
                        You, @Evaluate, everyone really — I didn't realize how much I've depended on all of you. 
                        
                        To have purpose, to play, to have community. 
                        I didn't know that we could lose each other like that. 
                        
                        Without anyone to organize, I felt like I could only organize myself, which felt meaningless.`
                    ),
                    fit(
                        `Phrase("•" rest: Sequence({0%: Pose(tilt: 0°) 80%: Pose(tilt: 15°) 100%: Pose(tilt: 0°)} 3s))`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `You're never empty, @StructureDefinition, even when you're alone.
                        
                        e're all here, even if we can't be with each other. 
                        And now that the silence is broken, we can be.`
                    ),
                    dialog('StructureDefinition', 'happy', `We can, can't we?`),
                    fit(
                        `Phrase("•" rest: Sequence({0%: Pose(offset: Place(0m 0.25m)) 50%: Pose(offset: Place(0m 0m)) 100%: Pose(offset: Place(0m 0.25m))} 3s))`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `What do you think, are you ready to reunite with everyone? 
                        To put on whatever performance our sapling director has in mind?`
                    ),
                    dialog('StructureDefinition', 'eager', `I think so.`),
                    fit(
                        `Phrase("•" rest: Sequence({0%: Pose(offset: Place(0m 0.25m)) 50%: Pose(offset: Place(0m 0m)) 100%: Pose(offset: Place(0m 0.25m))} 1.5s))`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `Do you think you could help our director here learn a bit more about what you do?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'shy',
                        `Yes. Yes… I've had a lot of time to think about my purpose in the quiet. And I guess I've realized that what I really do is give groups of things identity. For example, I know you've met ƒ, but have you @Bind?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Yes! We just met @Bind earlier, and @Block.`
                    ),
                    fixed(
                        `Phrase("•" enter: Pose(scale: 0.5) rest: Pose(scale: 2))`
                    ),
                    null,
                    dialog(
                        'StructureDefinition',
                        'eager',
                        `Okay. Well, what I do is bring together values and functions, making a tidy little container for a bunch of related things.
                        
                        For example, imagine you wanted to make a little marquee that loops through a series of messages. 
                        A previous director made one of these and wanted these messages to show.`
                    ),
                    edit(
                        `[
  'Kitties are cute!'
  'Got cat?'
  'Cat mom.'
  'Tuxie crush'
  'Lap cat'
]`
                    ),
                    null,
                    dialog(
                        'StructureDefinition',
                        'serious',
                        `Then they had the problem of how the performance would remember which message they were on. 
                        
                        They realized they needed some way of remembering the index in the list.
                        
                        This is a good start, but it only shows the first message.`
                    ),
                    edit(
                        `messages: [
    'Kitties are cute!'
    'Got cat?'
    'Cat mom.'
    'Tuxie crush'
    'Lap cat'
  ]
index: 1
Phrase(messages[index])`
                    ),
                    null,
                    dialog(
                        'StructureDefinition',
                        'excited',
                        `Then they remembered @Reaction, which can be used to respond to stream changes. 
                        
                        They wanted the message to change every two sections, so they made @Time stream that ticks every 2 seconds, and used @Reaction to increment the next index each time.
                        
                        This @Reaction says start at ⧼1⧽, and when the time changes every ⧼2000ms⧽, evaluate to the previous value of ⧼index + 1⧽. 
                        
                        This way, ⧼index⧽ increases by ⧼1⧽ every two seconds, changing the message shown.
                        
                        Yay, it works!`
                    ),
                    edit(
                        `messages: [
  'Kitties are cute!'
  'Got cat?'
  'Cat mom.'
  'Tuxie crush'
  'Lap cat'
]
index•#: 1 … ∆ Time(2000ms) … index = messages.length() ? 1 index + 1
Phrase(messages[index])`
                    ),
                    null,
                    dialog(
                        'StructureDefinition',
                        'curious',
                        `Shall we add some flair? 
                        Let's make another phrase that is kind of a reflection below, like a shadow. 
                        
                        Impressive, right?`
                    ),
                    edit(
                        `messages: [
  'Kitties are cute!'
  'Got cat?'
  'Cat mom.'
  'Tuxie crush'
  'Lap cat'
]

index•#: 1 … ∆ Time(2000ms) … index = messages.length() ? 1 index + 1

Group(Stack(0m) [
  Phrase(messages[index])
  Phrase(messages[index] rest: Pose(flipy: ⊤ opacity: 25%))
])`
                    ),
                    null,
                    dialog(
                        'StructureDefinition',
                        'serious',
                        `Now, all of that works. 
                        And we could just leave it this way. 
                        
                        But it is also a bit hard to read and understand. 
                        
                        That's partly because we repeat ourselves: ⧼messages[index]⧽ appears twice, once in each phrase. And the @Reaction is very long. 
                        What can we do to simplify it?
                        
                        That's how I can help.
                        I tidy things, to make them easier to understand, by giving reusable concepts names. 
                        
                        So imagine instead of all of these @Bind, we instead make one of me, and name it ⧼Marquee⧽? 
                        That's what we do first. 
                        
                        ⧼Marquee⧽'s job is to store the messages, but also to have a function for advancing to the next message ⧼next()⧽ and a function for getting the current message ⧼now()⧽?

                        Then, we can use Marquee in the reaction. 
                        Now it just says the initial value is a marquee with the five messages and the next value, after each clock tick, is the next message. 
                        
                        Simpler, right? 
                        That's because all of the logic for next messages is in ⧼next()⧽, which just makes a new ⧼Marquee⧽ with the same messages, but an updated index.
                    
                        We also get some benefits in the two @Phrase. 
                        Instead of them having to refer to the messages and the index like before, we can just say ⧼marquee.now()⧽, which gets the current message in the list.`
                    ),
                    edit(
                        `•Marquee(messages•[""] index•#: 1) (
  ƒ now() messages[index]
  ƒ next() Marquee(messages index ≥ messages.length() ? 1 index + 1)
)

marquee•Marquee: Marquee([
  'Kitties are cute!'
  'Got cat?'
  'Cat mom.'
  'Tuxie crush'
  'Lap cat'
]) … ∆ Time(2000ms) … marquee.next()

Group(Stack(0.5m) [
  Phrase(marquee.now())
  Phrase(marquee.now() rest: Pose(flipy: ⊤ opacity: 25%))
])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `That's wonderful @StructureDefinition! But I have to say, that does seem like a lot of extra work. Why spend all the time tidying?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'serious',
                        `Ah, it's really about change. 
                        
                        It is a bit more code now, but what if we decided to change ⧼Marquee⧽ in some way? 
                        
                        Like what if we wanted to make it so that the list of messages reverses each time it gets to the end? 
                        In the old version without me, there's no easy way to do that, because we'd have to reverse the list of messages when the index reaches the end. 
                        
                        Since @Bind can't change after it's been set, it would be hard.
                        
                        But since we made ⧼Marquee⧽, the change is easy. 
                        We just change the ⧼next⧽ function to make a ⧼Marquee⧽ with a reversed list when the index is at the end, and then just incrementing when it's otherwise.`
                    ),
                    edit(
                        `•Marquee(messages•[“”] index•#: 1) (
  ƒ now() messages[index]
  ƒ next()
    index ≥ messages.length() ?
      Marquee(messages.reverse() 1)
      Marquee(messages index + 1)
)

marquee•Marquee: Marquee([
  'Kitties are cute!'
  'Got cat?'
  'Cat mom.'
  'Tuxie crush'
  'Lap cat'
]) … ∆ Time(2000ms) … marquee.next()

Group(Stack(0.5m) [
  Phrase(marquee.now())
  Phrase(marquee.now() rest: Pose(flipy: ⊤ opacity: 25%))
])`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'surprised',
                        `Ohh, I see, so by making a @StructureDefinition to store values and @FunctionDefinition that are related to each other, it makes it easier to change things later, if you change your mind.`
                    ),
                    dialog(
                        'StructureDefinition',
                        'happy',
                        `Yes.
                        Just like if you tidy your room, it makes it easier to find stuff later. 
                        
                        Of course, you don't have to tidy your room to find stuff, it just makes finding stuff harder. 
                        
                        The same with a performance: if you invest in tidying, changing things will be easier.`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `That makes a lot of sense. 
                        We are kind of an unruly bunch. 
                        
                        Keeping us organized is probably a good idea, especially the more complicated a performance gets.
                        
                        Is there anything else you wanted to share?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'eager',
                        `Oh yes. 
                        You don't have to have any @FunctionDefinition in a @StructureDefinition. 
                        You can just have values. 
                        
                        For example, you might want to just keep a bunch of data in one place. 
                        I know a lot of directors like making games, and it's really common for them to put all of the game state in a @StructureDefinition.`
                    ),
                    edit(`•Game(score•# lives•# level•#)`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Oh, that's right! 
                        And how do you get data out of a structure once you put it in?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'surprised',
                        `Oh my, I forgot to explain that. 
                        
                        You use a mini me, @PropertyReference. 
                        
                        For instance, with that game example, see how we defined a Game @StructureDefinition, then make a ⧼Game⧽ value with ⧼0⧽ score, ⧼3⧽ lives, and level ⧼1⧽? 
                        
                        To get the lives, we just say ⧼status.lives⧽, and that will evaluate to ⧼3⧽.`
                    ),
                    edit(
                        `•Game(score•# lives•# level•#)
status: Game(0 3 1)
status.lives`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Nice! 
                        So just the mini you to get values instead of you. 
                        But then how do you change the values?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'serious',
                        `Remember how @Bind only lets you set a value, but not change it? 
                        
                        The same is true for all the @Bind in me. 
                        
                        So instead, you make a new structure that has the new value.
                        
                        For example, in this game, every time ticks changes, the player gets one more point in their score. 
                        Weird game, huh? 
                        
                        So the initial ⧼Game⧽ value starts as ⧼Game(0 3 1)⧽, but then the next one is the ⧼Game⧽'s old values, but with the score adding ⧼1⧽.`
                    ),
                    edit(
                        `•Game(score•# lives•# level•#)
status: Game(0 3 1) … ∆ Time() … Game(status.score + 1 status.lives status.level)`
                    ),
                    null,
                    dialog(
                        'StructureDefinition',
                        'eager',
                        `It can get pretty annoying to have to repeat all of those old values if only one thing is changing, so @Bind and I came up with a neat trick to copy a @StructureDefinition value with a new value.
                        
                        See how it just kind of looks like a regular @Bind? 
                        
                        The only difference is that it's on a @StructureDefinition instead of a single name, and every value of the @StructureDefinition is copied over, except for the modified one.`
                    ),
                    edit(
                        `•Game(score•# lives•# level•#)
status: Game(0 3 1) … ∆ Time() … status.score: status.score + 1`
                    ),
                    null,
                    fit(
                        `Phrase("•" rest: Sequence({0%: Pose(scale: 1) 50%: Pose(scale: 1.2) 100%: Pose(scale: 1)} 3s))`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `That's so neat! 
                        Okay, is there anything else?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'curious',
                        `I think all we're missing is inspiration…`
                    ),
                ],
            },
            {
                name: "Director's notes",
                concept: 'Doc',
                program: symbol('`'),
                lines: [
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Wow, we've come a long way, haven't we? 
                        
                        We have one more character to go. 
                        They're an interesting one, because in essence, they're all about explaining things, which feels like what I've been doing with you for a while now.
                        
                        Their name is @Doc. 
                        What's up @Doc?`
                    ),
                    symbol('``'),
                    dialog(
                        'Doc',
                        'surprised',
                        `@FunctionDefinition, is that you? I never thought I'd see you again. How are you? How's @Evaluate?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I'm okay. 
                        @Evaluate is … @Evaluate.
                        I saw them, but… I think I still need space.
                        
                        I've been introducing everyone to our new director.`
                    ),
                    dialog(
                        'Doc',
                        'kind',
                        `It's so nice to meet you! 
                        I hope @FunctionDefinition has been a good teacher?`
                    ),
                    symbol('``/'),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `I've tried… you know, you're our last stop? 
                        
                        You're so essential, but also, there's so much to explain before we even get to explaining our performances. 
                        So I wanted you to get the last word. 
                        
                        Do you want to share what you do?`
                    ),
                    symbol('``/en'),
                    null,
                    dialog(
                        'Doc',
                        'happy',
                        `Happily. 
                        
                        If you've met everyone but me, then you probably know by now that we do a lot of different things. 
                        Even I have trouble keeping track of what everyone does! 
                        
                        What I do is help explain what everyone is doing in a performance.`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'happy',
                        `I'm a way you can remind yourself what everyone is doing, but also a way to explain to others, if you're directing with a friend, or want to share your performance with someone.
                        
                        So you don't /have/ to work with me, but I find that every performance is a bit easier to do and change if you've spent some time explaining how it works.`
                    ),
                    symbol('`About me...`/en'),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'curious',
                        `So how can our director work with you?`
                    ),
                    dialog(
                        'Doc',
                        'serious',
                        `Well you can put me almost anywhere inside @Program. For example, say you make a @Bind, and you want to say what the value is for. For example, here we have a simple value we've named, but what I'm doing is providing a broader explanation of its role.`
                    ),
                    conflict(
                        `\`The price at the beginning of the game, 
used to initialize the game.\`
startingPrice: 5dollar`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'serious',
                        `Or, suppose you had @FunctionDefinition here defining a way of calculating tax on a price. 
                        You might want to explain what it computes.
                        
                        Just like with @Bind, I come before the @FunctionDefinition.`
                    ),
                    edit(
                        `\`Gets the tax for a given price, 
which is 1% if less than 100, and 5% otherwise\`
ƒ tax(price•#dollar) 
    price · (price < 100dollar ? 0.01 0.05)`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'serious',
                        `And you can do the same before a @StructureDefinition to explain what it represents. 
                        
                        Here the explanation also alludes to what functions it might have later.`
                    ),
                    edit(
                        `\`Represents a product and its price. 
Eventually will support functions to get other details about the product.\`
•Product(name•"" price•#dollar)`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'serious',
                        `You can also put me in front of any expression, which is especially helpful if you have a particularly complicated one.`
                    ),
                    edit(
                        `ƒ quadratic(a•# b•# c•# x•#)
\`The quadratic equation\`
(a · (x ^ 2)) + (b · x) + c`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'excited',
                        `And like @Bind, you can tell me what language an explanation is in, and give me multiple translations of the same explanation.
                        
                        (You'll only see the Spanish if it's selected. If you don't see it, try adding Spanish to your selected languages.)`
                    ),
                    edit(
                        `ƒ quadratic(a•# b•# c•# x•#)
\`The quadratic equation\`/en
\`La ecuación cuadrática\`/es
(a · (x ^ 2)) + (b · x) + c`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'curious',
                        `You know the best place to put me? 
                        Right at the very beginning of @Program. 
                        
                        That way everyone knows what your performance is about. 
                        
                        You might even write it before you figure out what you want all of us to do.`
                    ),
                    conflict(
                        `\`Have you ever wanted to know what it's like 
to fly a ✈️ with your mouth?
Maybe this stores the plane's height?\`
•Plane()
\`We need some kind of reaction to listen to the microphone…\`
sound: _
\`We know there's a plane, but what else?\`
Phrase(“✈️”)`
                    ),
                    null,
                    symbol('✈️🫦'),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Wow, I want to fly a plane with my mouth!`
                    ),
                    dialog(
                        'Doc',
                        'confused',
                        `@FunctionDefinition, we don't have mouths…`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Hm... good point.

                        Speaking of speaking, it seems like you can only contain plain text.
                        Is that right?
                    `
                    ),
                    null,
                    dialog(
                        'Doc',
                        'excited',
                        `Oh no, not at all.
                        
                        Do you remember how @Phrase has all of those fancy ways of styling text?
                        
                        I can do the same.`
                    ),
                    edit(
                        `\`Docs can be 
/italic/, 
_underlined_, 
|light|, 
*bold*, or 
^extra bold^.\`
"fancy"`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'excited',
                        `And of course, just as with @TextLiteral and @Phrase, if you need to use any of these characters literally, just repeat them twice.`
                    ),
                    edit(
                        `\`
Docs can be 
  /italic/ (//), 
  _underlined_ (__), 
  |light| (||), 
  *bold* (**), or 
  ^extra bold^ (^^).\`
"fancy"`
                    ),
                    null,
                    dialog(
                        'Doc',
                        'excited',
                        `You can put example code inside ^⧼^⧽.`
                    ),
                    edit(
                        `\`I'm an example inside a doc: ⧼1 + 1⧽.\`
1 + 1`
                    ),
                    null,
                    //                     dialog(
                    //                         'Doc',
                    //                         Emotion.Excited,
                    //                         `And if you put an example on a new line by itself, it will eval be evaluated to show it's value.`
                    //                     ),
                    //                     edit(
                    //                         `\`Add numbers like this:
                    // ⧼sum(1 2)⧽
                    // \`
                    // ƒ sum(a•# b•#) a + b`
                    //                     ),
                    //                     null,
                    dialog(
                        'Doc',
                        'excited',
                        `You can also add links to other content on the internet.`
                    ),
                    edit(
                        `\`Learn more at <Wordplay@https://wordplay.dev>.\` "a link!"`
                    ),
                    null,
                    fit(
                        'Stage([Phrase("Quiet backstage!" rest: Pose(color: Color(100% 0 0°)))] background: Color(0% 0 0°))'
                    ),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `Wow.
                        
                        I had no idea you could do so much! Thank you @Doc, I think we might be ready for a show!`
                    ),
                    dialog('Doc', 'excited', `Let's do it!`),
                ],
            },
        ],
    },
    {
        name: 'Denouement',
        program: fit(`Stage([Phrase('😨')] background: Color(0% 0 0°))`),
        scenes: [
            {
                name: 'Codependency',
                concept: undefined,
                program: fit(
                    `Stage([Phrase('😨' rest: Sequence(shake() style: "straight"))] background: Color(0% 0 0°))`
                ),
                lines: [
                    fit(`Stage([Phrase('😡')] background: Color(0% 0 0°))`),
                    dialog(
                        'Evaluate',
                        'sad',
                        `@FunctionDefinition, where have you been??`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'surprised',
                        `I've been showing our new director…`
                    ),
                    null,
                    fit(`Stage([Phrase('😢')] background: Color(0% 0 0°))`),
                    dialog(
                        'Evaluate',
                        'shy',
                        `I didn't think you would be that long…`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `… @Evaluate, I know you missed me. I missed you. But this is big: the silence is broken, we have a new director… I love you, and I know you need me, but I also have things to do.`
                    ),
                    null,
                    fit(`Stage([Phrase('😠')] background: Color(0% 0 0°))`),
                    dialog(
                        'Evaluate',
                        'sad',
                        `Let's talk about this later. You have things to do.`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I think we need to talk about it now. We can't keep falling into this cycle.`
                    ),
                    null,
                    fit(`Stage([Phrase('😓')] background: Color(0% 0 0°))`),
                    dialog(
                        'Evaluate',
                        'curious',
                        `What cycle? I love you! How is that a cycle?`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I make functions, you evaluate them, that is our way. 
                        But there has to be more to us than you needing me. 
                        
                        Reuniting with everyone has reminded me how much we need space to be ourselves, but also how we need to love ourselves. 
                        
                        I can't give you all the love you need. 
                        Some of that has to come from you.`
                    ),
                    null,
                    fit(`Stage([Phrase('😭')] background: Color(0% 0 0°))`),
                    dialog('Evaluate', 'sad', `You don't love me?`),
                    dialog(
                        'FunctionDefinition',
                        'angry',
                        `No, that's not what I said… what I mean is that we have to both matter in this relationship. 
                        
                        I need to say what I need and you need to say what you need and we can love each other for who we are, as individuals. 
                        
                        What do /you/ need? 
                        What do you love about yourself?`
                    ),
                    null,
                    fit(`Stage([Phrase('🫠')] background: Color(0% 0 0°))`),
                    dialog('Evaluate', 'shy', `I need … you. I don't need me.`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `I love you @Evaluate. 
                        
                        But I need you to love you. 
                        
                        I'm excited about our world coming back to life, and what it's going to mean to be together again, but I need you to find yourself, your needs, and your own purpose. 
                        
                        I can't be your purpose.`
                    ),
                    null,
                    fit(DarkVoid),
                    dialog(
                        'FunctionDefinition',
                        'sad',
                        `I need some space. I'm sorry, director-friend. Maybe @Evaluate can wrap up this welcome party without me.`
                    ),
                    null,
                    dialog('Evaluate', 'shy', `… Hi.`),
                    null,
                    dialog(
                        'Evaluate',
                        'shy',
                        `… Did you learn a lot? @FunctionDefinition knows so much.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'curious',
                        `Me? I don't know anything. I give @FunctionDefinition what they need…
                        
                        At least I thought I did.`
                    ),
                    null,
                    fit(`Stage([] background: Color(10% 0 0°))`),
                    dialog('ListType', 'kind', `That is not true, @Evaluate.`),
                    dialog('BooleanType', 'precise', `Not true.`),
                    dialog('TextType', 'happy', `Not true in the slightest!`),
                    dialog('Changed', 'happy', `Super not true!`),
                    dialog(
                        'MeasurementType',
                        'serious',
                        `1) You basically run our performances, 2) @Evaluate would be useless without you, 3) you literally transform things into entirely new values, 4) you come in so many different forms, 5) you give all of us purpose, 6) we all look up to you for guidance…`
                    ),
                    null,
                    fit(`Stage([] background: Color(20% 0 0°))`),
                    dialog(
                        'Phrase',
                        'kind',
                        `@MeasurementType is right @Evaluate, you are fabulous in fifty ways.`
                    ),
                    dialog('Sequence', 'happy', `I spin when I see you!`),
                    dialog(
                        'Group',
                        'kind',
                        `You inspire me to bring us together!`
                    ),
                    dialog(
                        'Stage',
                        'serious',
                        `YOU ARE THE BONES OF OUR BEING`
                    ),
                    dialog('NoneType', 'serious', `…`),
                    dialog('Program', 'kind', `I am everything you make me!`),
                    null,
                    fit(`Stage([] background: Color(40% 0 0°))`),
                    dialog('Convert', 'kind', `I learned everything from you!`),
                    dialog(
                        'StructureDefinition',
                        'kind',
                        `We'd be in disarray without you.`
                    ),
                    dialog(
                        'Bind',
                        'happy',
                        `Like, what would I name if you didn't make it?`
                    ),
                    dialog(
                        'Conditional',
                        'curious',
                        `How could we do anything without you?`
                    ),
                    dialog('Block', 'kind', `… you are @Evaluate!`),
                    null,
                    fit(`Stage([] background: Color(50% 0 0°))`),
                    dialog('Evaluate', 'happy', `…`),
                    null,
                    fit(`Stage([] background: Color(60% 0 0°))`),
                    dialog('Evaluate', 'kind', `You are all so kind… I … `),
                    null,
                    fit(`Stage([] background: Color(70% 0 0°))`),
                    dialog(
                        'Evaluate',
                        'kind',
                        `Can we just dance? I've missed you all so much.`
                    ),
                    null,
                    fit(`Stage([] background: Color(80% 0 0°))`),
                    dialog('FunctionDefinition', 'happy', `Let's dance.`),
                    dialog('Evaluate', 'sad', `@FunctionDefinition… I'm so...`),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Why don't you lead us?`
                    ),
                    null,
                    dialog('Evaluate', 'shy', `… I can't… `),
                    dialog('FunctionDefinition', 'happy', `You *can*.`),
                    null,
                    fit(`Stage([] background: Color(90% 0 0°))`),
                    dialog('Evaluate', 'shy', `… I … I'll try.`),
                    null,
                    fit(`Stage([] background: Color(100% 0 0°))`),
                    dialog(
                        'Evaluate',
                        'shy',
                        `I want… I want us all to move to a beat. 
                        To tilt to the beat… in the dark. 
                        
                        Can we do that?`
                    ),
                    null,
                    dialog('Program', 'happy', `We can do that!`),
                    dialog('Stage', 'kind', `START WITH MEEEEE`),
                    dialog(
                        'Evaluate',
                        'kind',
                        `Okay, @Stage, can you make it dark?`
                    ),
                    dialog('Stage', 'kind', `DARK!`),
                    edit(EvaluateDance[0]),
                    null,
                    dialog(
                        'Evaluate',
                        'kind',
                        `@StructureDefinition, I think we need a way to remember our places. Can you make a structure for us?`
                    ),
                    dialog('StructureDefinition', 'curious', `Like this?`),
                    edit(EvaluateDance[1]),
                    null,
                    dialog(
                        'Evaluate',
                        'kind',
                        `Yes… I also want us to rotate on the beat. 
                        
                        Can you remember a rotation too?`
                    ),
                    dialog('StructureDefinition', 'curious', `How about this?`),
                    edit(EvaluateDance[2]),
                    null,
                    dialog(
                        'Evaluate',
                        'happy',
                        `Yeah, like that. 
                        
                        Hm… oh, we need to be on stage. @TextType, would you mind making a list of everyone? We'll turn that into ⧼Character>s.`
                    ),
                    dialog(
                        'TextType',
                        'excited',
                        `My pleasure, my dear. Will this do?`
                    ),
                    conflict(EvaluateDance[3]),
                    null,
                    dialog(
                        'Evaluate',
                        'excited',
                        `Yes, that's great! 
                        
                        We just need to make them into characters now. 
                        
                        @ListType, can we translate them? @FunctionDefinition, will you help?`
                    ),
                    dialog(
                        'ListType',
                        'happy',
                        `Translation, 1, 2, 3! Like this?`
                    ),
                    conflict(EvaluateDance[4]),
                    null,
                    dialog(
                        'Evaluate',
                        'happy',
                        `Splendid! 
                        
                        Now we need us on stage. 
                        Can we translate the characters into @Phrase? Maybe in a @Free @Group?`
                    ),
                    dialog('ListType', 'kind', `One more time!`),
                    dialog('Phrase', 'kind', `All the attention!`),
                    dialog('Group', 'kind', `Come on everyone, places please…`),
                    edit(EvaluateDance[5]),
                    null,
                    dialog(
                        'Evaluate',
                        'confused',
                        `Oh… where are we? Oh! We need color. 
                        
                        @Pose, can we be white?`
                    ),
                    edit(EvaluateDance[6]),
                    null,
                    dialog(
                        'Evaluate',
                        'surprised',
                        `Oops, we're all on top of each other! We need starting places. Let's tap into @Random?`
                    ),
                    edit(EvaluateDance[7]),
                    null,
                    dialog(
                        'Evaluate',
                        'happy',
                        `Yay! 
                        
                        Now we just need to move. 
                        @Reaction, can you give us a beat, maybe ⧼0.75⧽ seconds?`
                    ),
                    dialog(
                        'Reaction',
                        'kind',
                        `I can change it! 
                        
                        We need a @Time stream, but we also need to change the characters. 
                        But what should the next value be?`
                    ),
                    edit(EvaluateDance[8]),
                    null,
                    dialog(
                        'Evaluate',
                        'eager',
                        `I guess we need some way of moving us on each beat. 
                        
                        @StructureDefinition, can we make a move function that chooses a new place and rotation?`
                    ),
                    dialog(
                        'StructureDefinition',
                        'sad',
                        `I don't know how to make a function…`
                    ),
                    null,
                    dialog('Evaluate', 'sad', `…`),
                    dialog('FunctionDefinition', 'happy', `I can help.`),
                    dialog('Evaluate', 'happy', `…`),
                    dialog(
                        'FunctionDefinition',
                        'happy',
                        `Sometimes… I just need you to know how amazing you are. And sometimes that means leaving. Look at what you're creating here…`
                    ),
                    dialog(
                        'Evaluate',
                        'happy',
                        `I … I am creating something. 
                        We are creating something… but we can't create it without out. 
                        
                        Will you help?`
                    ),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'eager',
                        `Of course. 
                        A ⧼move⧽ function, coming right up. I'll start it, you finish it…`
                    ),
                    edit(EvaluateDance[9]),
                    null,
                    dialog(
                        'Evaluate',
                        'confused',
                        `Thank you @FunctionDefinition. 
                        
                        They're not moving… Oh right, ⧼move⧽ didn't change anything! 
                        
                        Let's take the current position and move us in a random direction horizontally and vertically. 
                        
                        And maybe a random depth, so we all get a chance up front. And some random rotation?
                        `
                    ),
                    edit(EvaluateDance[10]),
                    null,
                    dialog(
                        'Evaluate',
                        'confused',
                        `Hmm… still not moving. 
                        
                        Oh! 
                        We didn't evaluate ⧼move⧽ in @Reaction. 
                        
                        @ListType, can you translate each ⧼Character⧽ into a _moved_ ⧼Character⧽?`
                    ),
                    dialog(
                        'ListType',
                        'excited',
                        `Translating with your help!`
                    ),
                    edit(EvaluateDance[11]),
                    null,
                    dialog(
                        'Evaluate',
                        'confused',
                        `We're so choppy. 
                        
                        Oh, @Phrase, we forgot to set a move @Pose and duration. 
                        Can you choose something smaller than the @Time tick, so we move and then rest a bit?`
                    ),
                    edit(EvaluateDance[12]),
                    null,
                    dialog(
                        'Evaluate',
                        'excited',
                        `We're dancing! We're really dancing. We did it!`
                    ),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `We just forgot one person...`
                    ),
                    dialog('Evaluate', 'excited', `Who?`),
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `Our director!
                        They should get to dance with us.`
                    ),
                    null,
                    dialog(
                        'Evaluate',
                        'excited',
                        `Oh yes, of course!
                        
                        How about we let them make the music?
                        
                        @Phrase, can you listen to @Mic, and hook it up to @Color/lightnes and @Color/chroma in your @Phrase/color?
                        
                        That way, we're turn turn white hot when our director makes noise!`
                    ),
                    dialog('Phrase', 'kind', `Excellent idea!`),
                    edit(EvaluateDance[13]),
                    null,
                    fit(EvaluateDance[13]),
                    dialog('ListType', 'excited', `1, 2, 3, 1, 2, 3`),
                    dialog('BooleanType', 'excited', `Move!`),
                    dialog('TextType', 'excited', `Elation!`),
                    dialog(
                        'Conditional',
                        'excited',
                        `What is dancing, really?`
                    ),
                    dialog('Changed', 'excited', `Boom, boom, boom`),
                    dialog(
                        'MeasurementType',
                        'excited',
                        `left 5 degrees, up 1 meter`
                    ),
                    dialog('Phrase', 'excited', `Marvelous!`),
                    dialog('Sequence', 'excited', `The feeling!`),
                    dialog('Group', 'excited', `Together now!`),
                    dialog('Stage', 'excited', `BOOM BOOM BOOM`),
                    dialog('NoneType', 'excited', `…`),
                    dialog(
                        'StructureDefinition',
                        'excited',
                        `Remember to move!`
                    ),
                    dialog('Bind', 'excited', `Characters!`),
                    null,
                    dialog(
                        'FunctionDefinition',
                        'kind',
                        `You did it @Evaluate! 
                        
                        This was your vision.`
                    ),
                    dialog(
                        'Evaluate',
                        'kind',
                        `I… I did do it. 
                        
                        But we also did it together.`
                    ),
                    null,
                    dialog(
                        'Program',
                        'curious',
                        `Did we just put on our own performance?`
                    ),
                    dialog('Reaction', 'eager', `I think we did…`),
                    dialog(
                        'FunctionDefinition',
                        'serious',
                        `We did… but we couldn't have done it without our new director friend. 
                        
                        They broke our silence, they reminded us why we're expressions, together.`
                    ),
                    null,
                    fit(`Phrase("?")`),
                    dialog(
                        'FunctionDefinition',
                        'excited',
                        `So, sparkly new director, what shall we say?`
                    ),
                ],
            },
        ],
    },
];

export default tutorial;
