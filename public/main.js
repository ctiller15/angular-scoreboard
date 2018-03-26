angular
  .module("mainGame", [])
  .controller("playerController", ($scope) => {

    class Game {
      constructor(teamCount) {

        this.teams = [];
        this.quarter = 1;
        this.prevQuarters = [];

        this.updateQuarter = () => {
          this.quarter += 1;
          let prevTeamsData = [];
          for(let i = 0; i < this.teams.length; i++) {
            let teamObj = {
              name: this.teams[i].name,
              score: this.teams[i].score
            };
            this.teams[i].resetScore();
            prevTeamsData.push(teamObj);
          }
          this.prevQuarters.push(prevTeamsData);
          console.log(this);
        }

        this.createTeam = (teamName) => {
          let team = new Team(teamName);
          this.teams.push(team);
        }

        for(let i = 0; i < teamCount; i++) {
          this.createTeam(`team ${i + 1}`);        
        }
      }
    }

    class Team {
      constructor(name) {
        this.score = 0;
        this.name = name;

        this.updateScore = (val) => {
          this.score += val;
        }

        this.resetScore = () => {
          this.score = 0;
        }

        this.updatedName = "";

        this.updateName = (name) => {
          this.name = name;
        }
      }
    }

    $scope.currGame = new Game(2);
    console.log($scope.currGame);
  });

