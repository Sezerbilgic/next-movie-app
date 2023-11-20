import React from 'react'

const Score = ({ score }: { score: number }) => {
  const _score = score.toString().replace(".", ",").slice(0, 3)

  const getScoreType = () => {
    switch (true) {
      case (score >= 8.5): {
        return "very-good";
      }
      case (score >= 7 && score < 8.5): {
        return "good";
      }
      case (score >= 6 && score < 7): {
        return "normal";
      }
      case (score >= 4 && score < 6): {
        return "bad";
      }
      case (score < 4): {
        return "very-bad"
      }
    }
  }

  return (
    <div className={`cm-score ${getScoreType()} `} >
        {_score}
    </div>
  )
}

export default Score