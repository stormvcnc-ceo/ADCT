import PageLayout from '@/components/PageLayout';

const EmailRefusal = () => {
    return (
        <PageLayout>
            <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">이메일무단수집거부</h1>

                <div className="prose max-w-none text-muted-foreground space-y-6">
                    <div className="p-6 bg-muted rounded-lg border border-border">
                        <p className="font-medium text-foreground mb-4">
                            본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
                        </p>
                        <p className="text-sm">
                            게시일: 2026년 1월 1일
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">정보통신망법 제50조의 2 (전자우편주소의 무단 수집행위 등 금지)</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
                            </li>
                            <li>
                                누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매ㆍ유통하여서는 아니된다.
                            </li>
                            <li>
                                누구든지 제1항 및 제2항의 규정에 의하여 수집ㆍ판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default EmailRefusal;
