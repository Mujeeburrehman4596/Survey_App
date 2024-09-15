document.getElementById('survey').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve the answers
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    const answer3 = document.getElementById('question3').value;

    // Display the results
    document.getElementById('result1').innerText = answer1;
    document.getElementById('result2').innerText = answer2;
    document.getElementById('result3').innerText = answer3 || 'No comments';

    // Toggle the visibility of the survey and results
    document.getElementById('surveyForm').classList.add('d-none');
    document.getElementById('resultCard').classList.remove('d-none');
});

document.getElementById('retakeSurvey').addEventListener('click', function() {
    // Reset the survey form
    document.getElementById('survey').reset();

    // Toggle the visibility of the survey and results
    document.getElementById('surveyForm').classList.remove('d-none');
    document.getElementById('resultCard').classList.add('d-none');
});
