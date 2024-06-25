import { StayPreview } from './StayPreview';
import { useNavigate } from 'react-router-dom'; // Ensure the correct import

export function StayList() {
    const previews = ['preview', 'preview', 'preview', 'preview', 'preview', 'preview', 'preview', 'preview', 'preview', 'preview', 'preview'];
    const navigate = useNavigate();

    return (
        <section className='stay-list grid'>
            {previews.map((preview, idx) => (
                <StayPreview
                    key={idx}
                    preview={preview}
                    onClick={() => navigate(`/stay/${idx + 1}`)} // Dynamic path for illustration
                />
            ))}
        </section>
    );
}
