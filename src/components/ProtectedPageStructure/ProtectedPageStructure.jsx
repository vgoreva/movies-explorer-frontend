import Header from '../Header/Header';
import Main from '../Main/Main';

function ProtectedPageStructure ({userEmail, ...props}) {
    return (
                <>
                  <Header
                  userEmail={userEmail} />
                  <Main
                    {...props}
                  />
                </>
              )
}

export default ProtectedPageStructure