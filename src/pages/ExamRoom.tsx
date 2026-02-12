import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { Card, Button, ProgressBar, Container, Row, Col, Alert } from 'react-bootstrap';
import { Clock, Send } from 'lucide-react';

const ExamRoom: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      submitExam();
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const submitExam = () => {
    setIsSubmitted(true);
    // TODO: AI Sentiment Analysis on user behavior (time per question)
    // saveResultsToFirebase(answers);
  };

  return (
    <Container className="mt-4">
      <div className="sticky-top pt-2 pb-3 mb-4 bg-inherit">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="m-0">ICAS Math P4</h2>
          <div className={`h4 m-0 ${timeLeft < 300 ? 'text-danger fw-bold' : ''}`}>
            <Clock size={24} className="me-2" />
            {formatTime(timeLeft)}
          </div>
        </div>
        <ProgressBar 
          now={(Object.keys(answers).length / questions.length) * 100} 
          variant="info"
          className="rounded-pill shadow-sm"
        />
      </div>

      {questions.map((q, idx) => (
        <Card key={q.id} className="mb-4 shadow-sm border-0 rounded-4">
          <Card.Body className="p-4">
            <h5>
              <span className="badge bg-primary me-2">Q{idx + 1}</span>
              {q.text}
            </h5>
            <Row className="g-3 mt-3">
              {q.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                return (
                  <Col md={6} key={i}>
                    <Button
                      variant={answers[q.id] === letter ? "primary" : "outline-secondary"}
                      className="w-100 text-start p-3 rounded-3"
                      onClick={() => setAnswers({...answers, [q.id]: letter})}
                      disabled={isSubmitted}
                    >
                      <strong className="me-2">{letter}.</strong> {opt}
                    </Button>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      ))}

      <div className="text-center pb-5 mt-4">
        <Button 
          size="lg" 
          variant="success"
          className="px-5 rounded-pill shadow"
          onClick={submitExam}
          disabled={isSubmitted}
        >
          <Send className="me-2" /> Submit Examination
        </Button>
      </div>

      {isSubmitted && (
        <Alert variant="success" className="fixed-bottom m-3 shadow-lg">
          Exam Submitted! Proceed to your Dashboard to see AI-powered recommendations.
        </Alert>
      )}
    </Container>
  );
};

export default ExamRoom;