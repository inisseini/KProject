import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import TextWithRuby from './TextWithRuby';

const FeedBack = () => {
  const [answers, setAnswers] = useState({
    q1: null,
    q2: { choices: [], freeText: '' },
    q3: null,
    q4: { choices: [], freeText: '' },
    q5: null,
    q6: { choices: [], freeText: '' },
    q7: '',
  });

  const [errors, setErrors] = useState({}); // エラーの状態を管理

  const handleRatingChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
    setErrors((prev) => ({ ...prev, [question]: false })); // エラーを解除
  };

  const handleMultiSelectChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: {
        ...prev[question],
        choices: prev[question].choices.includes(value)
          ? prev[question].choices.filter((v) => v !== value)
          : [...prev[question].choices, value],
      },
    }));
    setErrors((prev) => ({ ...prev, [question]: false })); // エラーを解除
  };

  const handleFreeTextChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: {
        ...prev[question],
        freeText: value,
      },
    }));
    setErrors((prev) => ({ ...prev, [question]: false })); // エラーを解除
  };

  const validateAnswers = () => {
    let hasErrors = false;
    const newErrors = {};

    // 必須項目のチェック
    const requiredQuestions = ['q1', 'q3', 'q5'];
    for (let question of requiredQuestions) {
      if (answers[question] === null) {
        newErrors[question] = true;
        hasErrors = true;
      }
    }

    // q2, q4, q6 の条件付き必須チェック
    const conditionalQuestions = [
      { main: 'q1', conditional: 'q2' },
      { main: 'q3', conditional: 'q4' },
      { main: 'q5', conditional: 'q6' },
    ];

    for (let { main, conditional } of conditionalQuestions) {
      if (answers[main] >= 4) {
        if (
          answers[conditional].choices.length === 0 &&
          answers[conditional].freeText.trim() === ''
        ) {
          newErrors[conditional] = true;
          hasErrors = true;
        }
      }
    }

    setErrors(newErrors); // エラーの状態を更新
    return !hasErrors;
  };

  const handleSubmit = () => {
    // バリデーションチェック
    const isValid = validateAnswers();

    if (isValid) {
      alert('ご協力いただきありがとうございます。');
      console.log(answers);
    } else {
      alert('すべての必須項目にご回答ください。');
    }
  };

  return (
    <div className='FeedBack taped sticker-box green'>
      <h1 className='intro-text'>
        <TextWithRuby text={'アンケートのお願い'} />
      </h1>

      {/* Q1-1 */}
      <div className={`question ${errors.q1 ? 'error' : ''}`}>
        <h2>
          <TextWithRuby
            text={'Q1-1 : 計量器を動かしてみて面白く感じましたか？'}
          />
          <span>
            <TextWithRuby text={'必須'} />
          </span>
        </h2>
        <div className='rating'>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`rating-button ${
                answers.q1 === value
                  ? 'active'
                  : Number(answers.q1) > value
                  ? 'color'
                  : ''
              }`}
              onClick={() => handleRatingChange('q1', value)}
            >
              <span>{value}</span>
              <FaStar />
            </button>
          ))}
        </div>
      </div>

      {/* Q1-2 */}
      {answers.q1 >= 4 && (
        <div className={`question fadeInOut ${errors.q2 ? 'error' : ''}`}>
          <h2>
            <TextWithRuby
              text={
                'Q1-2 : Q1-1で4、5を選んだ理由を教えてください。（複数回答可）'
              }
            />
            <span>
              <TextWithRuby text={'必須'} />
            </span>
          </h2>
          <div className='multi-select'>
            <label>
              <input
                type='checkbox'
                value='理由1'
                checked={answers.q2.choices.includes('理由1')}
                onChange={(e) => handleMultiSelectChange('q2', e.target.value)}
              />
              <TextWithRuby text={'江戸時代の両替屋さんの仕事を体験できた'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由2'
                checked={answers.q2.choices.includes('理由2')}
                onChange={(e) => handleMultiSelectChange('q2', e.target.value)}
              />
              <TextWithRuby text={'計量器の仕組みがわかった'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由3'
                checked={answers.q2.choices.includes('理由3')}
                onChange={(e) => handleMultiSelectChange('q2', e.target.value)}
              />
              <TextWithRuby
                text={'どんなふうに使われたのか体験を通して知ることができた'}
              />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由4'
                checked={answers.q2.choices.includes('理由4')}
                onChange={(e) => handleMultiSelectChange('q2', e.target.value)}
              />
              <TextWithRuby
                text={'知らない計量器について体験を通して知ることができた'}
              />
            </label>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                margin: '0 auto',
                textAlign: 'left',
              }}
            >
              <TextWithRuby text={'その他(理由を記入してください)'} />
              <textarea
                value={answers.q2.freeText}
                onChange={(e) => handleFreeTextChange('q2', e.target.value)}
              />
            </label>
          </div>
        </div>
      )}

      {/* Q2-1 */}
      <div className={`question ${errors.q3 ? 'error' : ''}`}>
        <h2>
          <TextWithRuby
            text={
              'Q2-1 :このサイトで計量器を体験する前に比べて計量（ものをはかること）に興味を持ちましたか？'
            }
          />
          <span>
            <TextWithRuby text={'必須'} />
          </span>
        </h2>
        <div className='rating'>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`rating-button ${
                answers.q3 === value
                  ? 'active'
                  : Number(answers.q3) > value
                  ? 'color'
                  : ''
              }`}
              onClick={() => handleRatingChange('q3', value)}
            >
              <span>{value}</span>
              <FaStar />
            </button>
          ))}
        </div>
      </div>

      {/* Q2-2 */}
      {answers.q3 >= 4 && (
        <div className={`question fadeInOut ${errors.q4 ? 'error' : ''}`}>
          <h2>
            <TextWithRuby
              text={
                'Q2-2 : Q2-1で4、5を選んだ理由を教えてください。（複数回答可）'
              }
            />
            <span>
              <TextWithRuby text={'必須'} />
            </span>
          </h2>
          <div className='multi-select'>
            <label>
              <input
                type='checkbox'
                value='理由1'
                checked={answers.q4.choices.includes('理由1')}
                onChange={(e) => handleMultiSelectChange('q4', e.target.value)}
              />
              <TextWithRuby text={'計量が生活に身近なものだと感じた'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由2'
                checked={answers.q4.choices.includes('理由2')}
                onChange={(e) => handleMultiSelectChange('q4', e.target.value)}
              />
              <TextWithRuby text={'計量が社会に役立っていると感じた'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由3'
                checked={answers.q4.choices.includes('理由3')}
                onChange={(e) => handleMultiSelectChange('q4', e.target.value)}
              />
              <TextWithRuby
                text={'自分の知らない計量がたくさんあることを知った'}
              />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由4'
                checked={answers.q4.choices.includes('理由4')}
                onChange={(e) => handleMultiSelectChange('q4', e.target.value)}
              />
              <TextWithRuby
                text={'実際に計量器でいろいろなものをはかってみたいと思った'}
              />
            </label>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                margin: '0 auto',
                textAlign: 'left',
              }}
            >
              <TextWithRuby text={'その他(理由を記入してください)'} />
              <textarea
                value={answers.q4.freeText}
                onChange={(e) => handleFreeTextChange('q4', e.target.value)}
              />
            </label>
          </div>
        </div>
      )}

      {/* Q3-1 */}
      <div className={`question ${errors.q5 ? 'error' : ''}`}>
        <h2>
          <TextWithRuby
            text={
              'Q3-1 :このサイトで計量器を体験する前よりさらに計量（ものをはかること）について知りたくなりましたか？'
            }
          />
          <span>
            <TextWithRuby text={'必須'} />
          </span>
        </h2>
        <div className='rating'>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`rating-button ${
                answers.q5 === value
                  ? 'active'
                  : Number(answers.q5) > value
                  ? 'color'
                  : ''
              }`}
              onClick={() => handleRatingChange('q5', value)}
            >
              <span>{value}</span>
              <FaStar />
            </button>
          ))}
        </div>
      </div>

      {/* Q3-2 */}
      {answers.q5 >= 4 && (
        <div className={`question fadeInOut ${errors.q6 ? 'error' : ''}`}>
          <h2>
            <TextWithRuby
              text={
                'Q3-2 : Q3-1で4、5を選んだ理由を教えてください。（複数回答可）'
              }
            />
            <span>
              <TextWithRuby text={'必須'} />
            </span>
          </h2>
          <div className='multi-select'>
            <label>
              <input
                type='checkbox'
                value='理由1'
                checked={answers.q6.choices.includes('理由1')}
                onChange={(e) => handleMultiSelectChange('q6', e.target.value)}
              />
              <TextWithRuby text={'計量の歴史'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由2'
                checked={answers.q6.choices.includes('理由2')}
                onChange={(e) => handleMultiSelectChange('q6', e.target.value)}
              />
              <TextWithRuby text={'いろいろな計量器の種類と仕組み'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由3'
                checked={answers.q6.choices.includes('理由3')}
                onChange={(e) => handleMultiSelectChange('q6', e.target.value)}
              />
              <TextWithRuby text={'正しい計量を守る社会の仕組み'} />
            </label>
            <label>
              <input
                type='checkbox'
                value='理由4'
                checked={answers.q6.choices.includes('理由4')}
                onChange={(e) => handleMultiSelectChange('q6', e.target.value)}
              />
              <TextWithRuby text={'正しい計量の仕方（はかり方）'} />
            </label>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                margin: '0 auto',
                textAlign: 'left',
              }}
            >
              <TextWithRuby text={'その他(理由を記入してください)'} />
              <textarea
                value={answers.q6.freeText}
                onChange={(e) => handleFreeTextChange('q6', e.target.value)}
              />
            </label>
          </div>
        </div>
      )}

      {/* Q4 */}
      <div className='question'>
        <h2>
          <TextWithRuby
            text={'Q4 : このサイトに関する感想・意見を自由にお寄せください'}
            anotherRuby={{ 関: 'かん' }}
          />
        </h2>
        <textarea
          value={answers.q7}
          onChange={(e) =>
            setAnswers((prev) => ({ ...prev, q7: e.target.value }))
          }
        />
      </div>

      {/* Submit */}
      <button
        className='husen'
        style={{ margin: '0 auto' }}
        onClick={() => handleSubmit()}
      >
        <TextWithRuby text={'送信'} />
      </button>
    </div>
  );
};

export default FeedBack;
