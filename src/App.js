import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return(
        <div className="start_page_buttons">
          <p>What do you want to know about me?</p>
          <button onClick={() => setPage(page+1)}>Education</button>
          <button onClick={() => setPage(page+2)}>Creativity</button>
          <button onClick={() => setPage(page+3)}>Spirituality</button>
          <button onClick={() => setPage(page+4)}>Gender and Sexuality</button>
        </div>
        )
    }
    if (page === 1) {
      return (
        <div className = "education_page">
        <p>I have the following qualifications:</p>
        <ul>
          <li>MA Multimedia Journalism</li>
          <li>BA History and Philosophy</li>
          <li>Coding Masters course with Code Nation</li>
          <li>BTec National Diploma Mutlimedia Design</li>
          <li>English Lit and General Studies A Levels</li>
          <li>Maths, Science, English, History, Music and French GCSEs</li>
        </ul>
        <p>Studying philosophy taught me logic and analytical thinking.  
          Studying Multimedia Journalism taught me html and css as well as 
          how to manipulate images and video.</p>
        <button onClick={() => setPage(page-1)}>back to main page</button>
        </div>
      )
    }
    if (page === 2) {
      return(
        <div className = "creativity_page">
          <p>These are my creative achievements</p>
          <button onClick={() => setPage(page+3)}>My writing</button>
          <button onClick={() => setPage(page+4)}>My music</button>
          <button onClick={() => setPage(page+5)}>My videos</button>
          <button onClick={() => setPage(page+6)}>My coding</button>
          <button onClick={() => setPage(page+7)}>My game design</button>
          <button onClick={() => setPage(page-2)}>back to main page</button>
          </div>
      )
    }
    if (page === 3) {
      return(
        <div className = "spirituality_page">
          <h2>A history of my spiritual beliefs</h2>
          <p>I was raised Christian.  My parents were in the Salvation Army and I was quite
            keen on reading the Bible when I was a child, partly because I enjoyed learning about
            ancient cultures like the Egyptians and the Greeks and Romans.  I also greatly admired
            Jesus and some of the prophets for speaking out against corrupt, hypocritical rulers and 
            religious authorities.</p>
          <p>In my late teens and early twenties I got increasingly interested in paganism, astrology
            and the occult.  I still considered myself a christian as well as a pagan at the time,
            and my paganism was a weird creation of my own, involving the elements and astrological related
            deties.  I was also strongly influenced by Linda Goodman at this time.
          </p>
          <p>In my mid and late twenties I rejected anything too superstitious and focused more and more
            on philsophy.  I stopped believing in Jesus's divinity at about the age of 21, viewing him
            as a spiritually enlightened man (like the Buddha of the west).  At that time I started viewing
            all religions as containing elements of truth but obscured by human folly and misunderstanding.
            As time went by and got more and more into philosophy, I became ever more rational in my beliefs, 
            and no longer believed in a human soul (personality is in the brain).  I became a pantheist and a 
            panpsychist at this time.
          </p>
          <p>In 2007 I became an atheist.  I finally reasoned that even consciousness is readily 
            explicable as the processing of information in our brains and there's nothing mysterious about it.
           I stopped beleiving in God or gods, I stopped believing in life after death, I stopped believing in anything
           supernatural. 
          </p>
          <p>But my sprituality returned.  In 2010 I started praying again.  I realised I needed a spiritual practice
            to feel whole and emotionally balanced.  I started to believe there was a mysterious presence in nature
            that you can interact with and draw strength and wisdom from.  An image that seemed perfect
            for this kind of very nature based understanding of deity was Cernunnos, the antlered celtic (and possibly prehistoric)
            god of the forests and wild animals.
          </p>
          <p>Indian ideas, from both Buddhism and Hinduism, had been a powerful influence on my spirituality before,
            and it was Hinduism I turned to at first when I wanted to expand my spiritual practice to 
            include symbolic representations of different aspects of the divine, of nature and of human experience.
            If all things are God then this makes a lot of sense.  I also justified it as finding balance
            between the rational and poetic parts of my mind.  This makes sense.  If you're doing science
            then you need to be as rational and objective as possible.  If you're trying to find peace of mind
            and purpose and balance in your life then it makes sense to honour your human needs, including
            the not so rational ones.  We are creatures of story and community after all, not just logic
            and ingenuity.  It's not really that rational to deny the validity of an important part of our human nature. 
          </p>
          <p>Eventually I became an eclectic pagan, drawing from Celtic, Greek and Egyptian mythology as well as Hinduism.
            More recently still, I have embraced the Greek pantheon as the one that speaks to me most.
            But I am still a pantheist at heart.  The gods are but symbols.  And the antlered god of the celts
            still resonates strongly with me.
          </p>
          <button onClick={() => setPage(page-3)}>back to main page</button>
        </div>
      )
    }
    if (page === 4) {
      return (
        <div className = "lgbt_page">
          <h2>My gender and sexuality</h2>
          <p>I'm a transgender woman and am very active in local transgender groups and online
            ]communities.
          </p>
          <p>I'm bisexual and have had both male and female partners in the past.
            I much prefer women but am definitely flexible about the gender of my partners.
          </p>
          <p>I'm sexually submissive.  Not so much into pain and bondage, although I do like
            some aspects of it.  Mostly my kinks are psychological/roleplay based or to do with
            certain fetishes.  I am definitely submissive or a bottom.  That's just the way my desires work.
          </p>
          <p>I'm also polyamorous.  I am open to having multiple partners and am also open to
            my partners having other partners.  As long as there is compassion, honesty and openness to 
            communication around any emotional difficulties, there is no reason why many partners cannot
            find a loving and secure situation with each other.  Monogamy feels too limiting
            to me these days.  I want to be loved for all of me, and that includes the fact that
            I may well have desires for multiple people.  I can't simply turn off my interest
            in and affection for other people, nor do I feel like I should do.  Monogamy also seems
            too much pressure.  You have to be everything for that person.  Sometimes people have
            complicated needs that can't be fulfilled by just one person.  And that's ok.  Monogamy
            can also be scarily isolating in abusive, toxic situations.  Of course polyamory can also
            be scarily rootless and unsettling in abusive, toxic situations.  Jealousy is a natural
            human emotion, as troublesome as it might be, and I wouldn't trust anyone that says
            you should ignore, dismiss or try to suppress it.  Communication is the key.  Talk about it,
            work out ways of reassuring each other, be honest, respectful, warm and compassionate with each
            other at all times, and there's no reason why polyamory shouldn't be just as 
            succesful a relationship style as monogamy.  The time someone spends with someone else
            shouldn't necessarily affect the quality of time you spend with that person, and the quality
            of the relationship you have with that person is what really matters.
          </p>
          <button onClick={() => setPage(page-4)}>back to main page</button>
        </div>
      )
    }
    if (page === 5) {
      return (
        <div className="writing_page">
          <p>My writing</p>
          <button onClick={() => setPage(page-3)}>back to creativity</button>
          <button onClick={() => setPage(page-5)}>back to main page</button>
        </div>
      )
    }
    if (page === 6) {
      return (
        <div className="music_page">
          <p>My music</p>
          <button onClick={() => setPage(page-4)}>back to creativity</button>
          <button onClick={() => setPage(page-6)}>back to main page</button>
        </div>
      )
    }
    if (page === 7) {
      return (
        <div className="video_page">
          <p>My videos</p>
          <button onClick={() => setPage(page-5)}>back to creativity</button>
          <button onClick={() => setPage(page-7)}>back to main page</button>
        </div>
      )
    }
    if (page === 8) {
      return (
        <div className="coding_page">
          <p>My github</p>
          <button onClick={() => setPage(page-6)}>back to creativity</button>
          <button onClick={() => setPage(page-8)}>back to main page</button>
        </div>
      )
    }
    if (page === 9) {
      return (
        <div className="writing_page">
          <p>My game design</p>
          <button onClick={() => setPage(page-7)}>back to creativity</button>
          <button onClick={() => setPage(page-9)}>back to main page</button>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <h1>Kim McLelland</h1>
      <div className="intro">
        <p>This is a promotional web app, showcasing my skills</p>
        <p>with JS React and also providing information about me.</p>
      </div>
      <div>
        {pageDisplay()}
      </div>
      <p className="footer">Bakcground image by <a href="https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Weirick</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
    </div>
  );
}

export default App;
